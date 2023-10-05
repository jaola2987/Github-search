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
import debounce from "lodash.debounce";

import { IFetchContextProps, Repo } from "./fetchProvider.interface";
import { FetchService } from "@/services/fetch.service";

const FetchContext = createContext({} as IFetchContextProps);

// function useDebounce(value: string, delay: number) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

export const FetchlProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState("");

  const handleError = useCallback((e: string) => setError(e), []);

  const debouncedSetUsername = debounce(
    (username: string) => setUsername(username),
    300
  );

  const handleUserName = useCallback(
    (e: string) => debouncedSetUsername(e),
    [debouncedSetUsername]
  );

  // const handleUserName = useCallback((e: string) => setUsername(e), []);

  // const debouncedUsername = useDebounce(username, 300);

  // useEffect(() => {
  //   if (debouncedUsername) {
  //     debouncedFetchData(debouncedUsername);
  //   }
  // }, [debouncedUsername, debouncedFetchData]);

  useEffect(() => {
    async function qwe(username: string, handleError: (e: string) => void) {
      const data = await FetchService.getData(username, handleError);
      setRepos(data);
      console.log("dd", data);
    }

    if (username) {
      qwe(username, handleError);
    }
  }, [handleError, username]);

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
