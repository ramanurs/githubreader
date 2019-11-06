const BASE_GITHUB_URL = 'https://api.github.com/'

export const getGitHubRepositoryCommits = (repo) => {
    const fetchURL = BASE_GITHUB_URL + repo + "/commits";
    console.log('Fetching commits for : '+fetchURL);
/*
    const data = fetch(fetchURL)
             .then((response) => response.json())
             .catch(console.log);
*/
    const data = fetch('https://api.github.com/repos/hazelcast/hazelcast/commits')
        .then(res => res.json());
        
    console.log("Data1 : "+data);
   return data;
}