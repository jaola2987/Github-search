"use client";

import { useFetchProviderContext } from "@/providers/FetchProvider";
import { useGlobalProviderContext } from "@/providers/GlobalProvider";
import { Repo } from "@/providers/fetchProvider.interface";
import Link from "next/link";
import React from "react";

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
      <div>
        {currentRepos?.map((repoItem: Repo) => (
          <div
            key={repoItem.id}
            style={{
              margin: "20px 0",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <h2>
              <Link
                href={`/${repoItem.name}`}
                onClick={() => handleSelectedRepo(repoItem)}
              >
                {repoItem.name}
              </Link>
            </h2>
            <p>{repoItem.description}</p>
            <p>⭐️ {repoItem.stargazers_count}</p>
          </div>
        ))}
      </div>
      {!!repos?.length &&
        [...Array(Math.ceil(repos?.length / reposPerPage)).keys()].map(
          (number) => (
            <button key={number + 1} onClick={() => paginate(number + 1)}>
              {number + 1}
            </button>
          )
        )}
    </>
  );
}
