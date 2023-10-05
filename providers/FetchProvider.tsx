"use client";

import {
  FC,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  PropsWithChildren,
  useCallback,
} from "react";

import { IFetchContextProps, Repo } from "./fetchProvider.interface";
import { FetchService } from "@/services/fetch.service";
import { useDebounce } from "@/hooks/useDebounce";

const FetchContext = createContext({} as IFetchContextProps);

export const FetchlProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState("");

  const handleError = useCallback((e: string) => setError(e), []);

  const handleUserName = useCallback((e: string) => {
    setUsername(e);
  }, []);

  const debouncedUsername = useDebounce(username, 500);

  useEffect(() => {
    if (debouncedUsername) {
      async function fetchData(
        username: string,
        handleError: (e: string) => void
      ) {
        const data = await FetchService.getData(username, handleError);
        setRepos(data);
      }
      fetchData(debouncedUsername, handleError);
    }
  }, [debouncedUsername, handleError]);

  const providerValue = useMemo(
    () => ({
      username,
      handleUserName,
      error,
      repos,
    }),
    [username, handleUserName, repos, error]
  );

  return (
    <FetchContext.Provider value={providerValue}>
      {children}
    </FetchContext.Provider>
  );
};

export function useFetchProviderContext() {
  const context = useContext(FetchContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
