# Technical Documentation

This React application includes three main components: SearchBar, RepositoryList, and RepositoryDetail.

## Overview SearchBar component

This code is a React component that renders a search bar for entering a GitHub username. It uses the fetch provider context to access the username, error message, and handler function for updating the username.

### Dependencies

This component depends on the following libraries and modules:

- React: A JavaScript library for building user interfaces.
- FetchProvider: A custom React context provider that fetches and provides the repositories.
- style: A CSS module that defines the styles for the component elements.

### Component Structure

The component is defined as a default function export named SearchBar. It has no props. It uses the useFetchProviderContext hook to get the username, error message, and handleUserName function from the fetch provider context.

The component returns a JSX element that renders two main elements:

- An input element with an inputField style that allows users to enter a GitHub username. It has a text type, a search name, and a placeholder text. It uses the username as its value and updates it with the handleUserName function when its value changes.
- A conditional rendering of a div element with an errorMessage style that displays the error message if it exists.

The component also logs the username and error message to the console for debugging purposes.

## Overview RepositoryList component

This code is a React component that renders a list of GitHub repositories with pagination. It uses two custom React context providers to access the current page, repositories, and handler functions. Each repository item in the list displays its name (which is a link to its details), the number of stars, and its description.

### Dependencies

This component depends on the following libraries and modules:

- React: A JavaScript library for building user interfaces.
- FetchProvider: A custom React context provider that fetches and provides the repositories.
- GlobalProvider: A custom React context provider that stores and provides the global state of the application, such as the current page and selected repository.
- Repo: A TypeScript interface that defines the structure of a repository object.
- Next.js: A React framework that enables server-side rendering and routing.
- style: A CSS module that defines the styles for the component elements.

### Component Structure

The component is defined as a default function export named RepositoryList. It has no props. It uses two hooks, useGlobalProviderContext and useFetchProviderContext, to get the current page, repositories, and handler functions from the global provider context and fetch provider context, respectively.

The component returns a JSX fragment that renders two main elements:

- A div element with a list style that maps over the current repositories (a slice of the total repositories based on pagination) and renders a div element for each repository item. Each item displays the repository name (which is a link to its details), the number of stars using emoji icons, and its description.
- A div element with a paginationWrapper style that maps over an array of page numbers (calculated based on the total number of repositories and repositories per page) and renders a button for each page number. The button has an active style if it corresponds to the current page.

The component also defines a constant reposPerPage for the number of repositories to display per page, and a helper function paginate for handling page changes.

## Overview RepositoryDetail component

This code is a React component that renders the detailed information of a selected GitHub repository. It uses the global provider context to access the selected repository object and displays its name, description, owner, number of stars, and a link to the repository on GitHub. It also provides a link to the home page for navigation.

### Dependencies

This component depends on the following libraries and modules:

- React: A JavaScript library for building user interfaces.
- GlobalProvider: A custom React context provider that stores and provides the global state of the application, such as the selected repository.
- Next.js: A React framework that enables server-side rendering and routing.
- style: A CSS module that defines the styles for the component elements.

### Component Structure

The component is defined as a default function export named RepositoryDetail. It has no props or state. It uses the useGlobalProviderContext hook to get the selectedRepo object from the global provider context. The selectedRepo object has the following properties:

- name: The name of the repository.
- description: The description of the repository.
- owner: An object that contains information about the owner of the repository, such as login (the username).
- stargazers_count: The number of stars that the repository has received.
- html_url: The URL of the repository on GitHub.

The component renders only if selectedRepo is truthy, otherwise it returns null.

## Overview GlobalProvider

GlobalProvider defines a global context provider for a React application. The provider is defined as a function component named GlobalProvider with children as its props. It uses two state hooks, useState, to store the selected repository and current page number, and two callback hooks, useCallback, to define the handler functions for updating these values.

The provider uses a memo hook, useMemo, to optimize performance by memoizing the provider value object and only recomputing it when one of its dependencies changes.

The provider returns a context provider component, GlobalContext.Provider, with the memoized value object as its value prop and renders its children.

### Context Hook

The code also defines a custom hook named useGlobalProviderContext for accessing the global context. It uses the useContext hook to get the context value and throws an error if it's undefined, meaning that the hook is used outside of the provider.

### Dependencies

This component depends on the following libraries and modules:

- React: A JavaScript library for building user interfaces.
- IGlobalProviderProps: A TypeScript interface that defines the structure of the global provider props.
- Repo: A TypeScript interface that defines the structure of a repository object.

## Overview FetchProvider

FetchProvider defines a fetch context provider for a React application. The provider is defined as a function component named FetchProvider with children as its props. It uses three state hooks, useState, to store the username, repositories, and error message, and two callback hooks, useCallback, to define the handler functions for updating these values and handling errors.

The provider uses a custom hook, useDebounce, to debounce the username value with a delay of 500 milliseconds. It uses an effect hook, useEffect, to fetch data from the GitHub API whenever the debounced username changes. The fetched data is set as the new repositories.

The provider uses a memo hook, useMemo, to optimize performance by memoizing the provider value object and only recomputing it when one of its dependencies changes.

The provider returns a context provider component, FetchContext.Provider, with the memoized value object as its value prop and renders its children.

### Context Hook

The code also defines a custom hook named useFetchProviderContext for accessing the fetch context. It uses the useContext hook to get the context value and throws an error if it's undefined, meaning that the hook is used outside of the provider.

### Dependencies

This component depends on the following libraries and modules:

- React: A JavaScript library for building user interfaces.
- IFetchContextProps and Repo: TypeScript interfaces that define the structure of the fetch context props and a repository object, respectively.
- FetchService: A service module that fetches data from the GitHub API.
- useDebounce: A custom hook that debounces a value.
