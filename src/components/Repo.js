import React from 'react';

const Repo = ({ repo }) => {
  return (
    <tr>
      <td>{repo.full_name}</td>
      <td>{repo.stargazers_count}</td>
      <td>
        <a href={repo.html_url}>{repo.html_url}</a>
      </td>
    </tr>
  );
};

export default Repo;
