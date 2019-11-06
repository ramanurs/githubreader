const BASE_GITHUB_URL = 'https://github.com/'

export const getGitHubRepositoryCommits = (repo) => {
    const fetchURL = BASE_GITHUB_URL + repo;
    console.log('Fetching commits for : '+fetchURL);

    return fetch(fetchURL).then((response) => response.json());
}