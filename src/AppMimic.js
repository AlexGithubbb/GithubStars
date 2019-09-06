// fetch the url

// want repourl, repo_name, stars

// render it to the screen

import React, { useEffect, useState } from 'react';
import RepoList from './components/RepoList';

const AppMimic = () => {
  const [repoList, setRepoList] = useState(null);
  const link =
    'https://api.github.com/search/repositories?q=stars:>25000+language:javascript&sort=stars&order=desc';
  // fetch url and get the data
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // throw new Error();
      const res = await fetch(link);
      const data = await res.json();
      // const newRepolist = data.items.map(
      //   ({ full_name, stargazers_count, html_url }) => {
      //     return {
      //       full_name,
      //       stargazers_count,
      //       html_url
      //     };
      //   }
      // );
      // setRepoList(newRepolist);
      setRepoList(
        data.items.map(({ full_name, stargazers_count, html_url }) => {
          return {
            full_name,
            stargazers_count,
            html_url
          };
        })
      );
    } catch (error) {
      setRepoList([]);
    }
  };

  console.log(repoList);

  return (
    <div>
      {repoList === null ? (
        <h1>Loading...</h1>
      ) : repoList.length === 0 ? (
        <h2 style={{ color: 'red' }}>
          opps, there're some errors.. please try again
        </h2>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Stars</th>
              <th>Repo Link</th>
            </tr>
            <RepoList repoList={repoList} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppMimic;
