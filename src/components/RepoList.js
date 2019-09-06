import React, { Fragment } from 'react';
import Repo from './Repo';

const RepoList = ({ repoList }) => {
  return (
    <Fragment>
      {repoList.map((repo, index) => (
        <Fragment key={index}>
          <Repo repo={repo} />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default RepoList;
