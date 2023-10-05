"use client";

import React from "react";
import { useGlobalProviderContext } from "@/providers/GlobalProvider";
import Link from "next/link";

export default function RepositoryDetail() {
  const { selectedRepo } = useGlobalProviderContext();
  return (
    selectedRepo && (
      <div>
        <h2>{selectedRepo.name}</h2>
        <p>{selectedRepo.description}</p>
        <p>Owner: {selectedRepo.owner.login}</p>
        <p>
          <span role="img" aria-label="star">
            ⭐️
          </span>{" "}
          {selectedRepo.stargazers_count}
        </p>
        <a
          href={selectedRepo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to repository
        </a>
        <Link href={`/`}>Home page</Link>
      </div>
    )
  );
}
