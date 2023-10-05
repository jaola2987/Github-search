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

import { IGlobalProviderProps } from "./globalProvider.interface";
import { Repo } from "./fetchProvider.interface";

const GlobalContext = createContext({} as IGlobalProviderProps);

export const GlobalProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectedRepo = useCallback((e: Repo) => setSelectedRepo(e), []);

  const handleCurrentPage = useCallback((e: number) => setCurrentPage(e), []);

  const providerValue = useMemo(
    () => ({
      selectedRepo,
      handleSelectedRepo,
      currentPage,
      handleCurrentPage,
    }),
    [selectedRepo, handleSelectedRepo, currentPage, handleCurrentPage]
  );

  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalProviderContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
