"use client";

import React from "react";
import { useGlobalProviderContext } from "@/providers/GlobalProvider";
import Link from "next/link";
import style from "./RepositoryDetail.module.css";

export default function RepositoryDetail() {
  const { selectedRepo } = useGlobalProviderContext();
  return (
    selectedRepo && (
      <div className={style.detailPageWrapper}>
        <h2 className={style.title}>{selectedRepo.name}</h2>
        <p>{selectedRepo.description}</p>
        <p>Owner: {selectedRepo.owner.login}</p>
        <p>
          <span role="img" aria-label="star">
            {!!selectedRepo.stargazers_count &&
              [...Array(selectedRepo.stargazers_count).fill(0)].map(
                (_, index) => <span key={index}>⭐️</span>
              )}
          </span>
        </p>
        <a
          href={selectedRepo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to repository
        </a>
        <Link className={style.backButton} href={`/`}>
          Home page
        </Link>
      </div>
    )
  );
}
