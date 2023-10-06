# GitHub Repository Search

## Overview

This is a web application that allows users to search for GitHub repositories and view detailed information about them. The application is built with Next.js, Typescript, React Context API, css-modules and uses the GitHub API for data fetching.

## Live Demo

The application is deployed on [Vercel](https://github-search-azure-sigma.vercel.app/).

## Features

- Search functionality: Users can enter a GitHub username to fetch and display a list of repositories associated with that user.
- Repository List: Displays the repository list, showing the repository name, description, and the number of stars.
- Repository Details: When a user clicks on a repository in the list, it displays detailed information about that repository including the repository’s name, description, owner’s username, number of stars, and a link to the repository on GitHub.
- Error handling: Implemented error handling for API calls and display appropriate error messages.
- Pagination: Added pagination to the repository list. Displays a limited number of repositories per page and allows users to navigate between pages

Learn more in [technical documentation](https://github.com/jaola2987/Github-search/blob/main/Technical%20documentation.md).

## How to Run Locally

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Open http://localhost:3000 to view it in the browser.
6. Run tests with `npm test`.

# [Roadmap](https://github.com/jaola2987/Github-search/blob/main/ROADMAP.md)
