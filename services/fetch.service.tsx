export const FetchService = {
  async getData(username: string, handleError: (e: string) => void) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      if (!response.ok) {
        throw new Error(
          `GitHub API returned ${response.status} for this request.`
        );
      } else {
        handleError("");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return handleError(error.message);
      }
    }
  },
};
