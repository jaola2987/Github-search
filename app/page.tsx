import RepositoryList from "@/components/RepositoryList/RepositoryList";
import SearchBar from "@/components/SearchBar/SearchBar";
import style from "./Home.module.css";
import "normalize.css";

export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>GitHub repository explorer</h1>
      <SearchBar />
      <RepositoryList />
    </div>
  );
}
