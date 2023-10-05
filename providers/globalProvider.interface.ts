import { Repo } from "./fetchProvider.interface";

export interface IGlobalProviderProps {
  selectedRepo: Repo | null;
  handleSelectedRepo: (e: Repo) => void;
  currentPage: number;
  handleCurrentPage: (e: number) => void;
}
