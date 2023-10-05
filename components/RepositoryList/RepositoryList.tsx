"use client";

import React from "react";
import { useFetchProviderContext } from "@/providers/FetchProvider";
import { useGlobalProviderContext } from "@/providers/GlobalProvider";
import { Repo } from "@/providers/fetchProvider.interface";
import Link from "next/link";
import style from "./RepositoryList.module.css";

const reposPerPage: number = 5;

export default function RepositoryList() {
  const { currentPage, handleSelectedRepo, handleCurrentPage } =
    useGlobalProviderContext();
  const { repos } = useFetchProviderContext();

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos?.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber: number) => handleCurrentPage(pageNumber);
  return (
    <>
      <div className={style.list}>
        {currentRepos?.map((repoItem: Repo) => (
          <div key={repoItem.id} className={style.listItem}>
            <h2>
              <Link
                href={`/${repoItem.name}`}
                onClick={() => handleSelectedRepo(repoItem)}
              >
                {repoItem.name}
              </Link>
              <span className={style.stats}>
                {!!repos?.length &&
                  [...Array(repoItem.stargazers_count).fill(0)].map(
                    (_, index) => (
                      <span role="img" aria-label="star" key={index}>
                        ⭐️
                      </span>
                    )
                  )}
              </span>
            </h2>
            <p>{repoItem.description}</p>
          </div>
        ))}
      </div>
      <div className={style.paginationWrapper}>
        {!!repos?.length &&
          [...Array(Math.ceil(repos?.length / reposPerPage)).keys()].map(
            (number, index) => (
              <button
                key={number + 1}
                className={currentPage === number + 1 ? style.active : ""}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            )
          )}
      </div>
    </>
  );
}
