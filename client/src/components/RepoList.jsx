import React from 'react';
import Repos from './repos.jsx';
const RepoList = (props) =>
  (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <tbody>
        {props.repos.map((repo, i)=>
          // let prop = Object.keys(repo);
          <Repos key={i} /*prop={prop}*/ repo={repo}/>

        )}
      </tbody>
    </table>
  </div>
  )

export default RepoList;