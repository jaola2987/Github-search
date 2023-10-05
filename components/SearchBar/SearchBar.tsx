"use client";

import React from "react";
import { useFetchProviderContext } from "@/providers/FetchProvider";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const { username, handleUserName, error } = useFetchProviderContext();

  console.log("username", username, error);
  return (
    <div className={style.searchBarWrapper}>
      <input
        className={style.inputField}
        type="text"
        name="search"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => handleUserName(e.target.value)}
      />
      {error && <div className={style.errorMessage}>{error}</div>}
    </div>
  );
}
