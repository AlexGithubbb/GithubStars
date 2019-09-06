import React, { useEffect, useState } from 'react';
import RepoList from './components/RepoList';
import './App.css';

// get query
// https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc

// want javascript repos with over 25k stars, sort it by most to least order
// stars:>25000
// q=  stars:>25000 + language:javascript  &sort=stars  &order=desc
// https://api.github.com/search/repositories?q=stars:>25000+language:javascript&sort=stars&order=desc

// fetch query

// full_name
// html_url
// stargazers_count

async function fetchGithub() {
  const res = await fetch(
    'https://api.github.com/search/repositories?q=stars:>25000+language:javascript&sort=stars&order=desc'
  );
  const results = await res.json();
  // console.log(results);
  return results;

  // console.log(results.items);
}

const App = () => {
  const [repoList, setRepoList] = useState(null);
  // get and show the data first when it's rendered
  // use componentDidMount here
  // show the data
  useEffect(() => {
    fetchGithub()
      .then(res =>
        // map returns a new array => reposList would be an array
        res.items.map(({ full_name, html_url, stargazers_count, id }) => {
          // throw new Error();
          return {
            full_name,
            html_url,
            stargazers_count,
            id
          };
        })
      )
      .then(repoList => setRepoList(repoList))
      .catch(err => setRepoList([]));
  }, []);

  return (
    <div className='App'>
      {repoList === null ? (
        <p>Loading...</p>
      ) : repoList.length === 0 ? (
        <h1>Opps, ther's an error, try again</h1>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Full_Name</th>
              <th>Stars</th>
              <th>Url</th>
            </tr>
            <RepoList repoList={repoList} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
