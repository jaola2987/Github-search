export interface IFetchContextProps {
  username: string;
  handleUserName: (e: string) => void;
  repos: Repo[];
  // handleRepos: (e: Repo[]) => void;
  error: string;
  // handleError: (e: string) => void;
}

export interface Repo {
  id: number;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: number;
  owner: {
    login: string;
  };
}
