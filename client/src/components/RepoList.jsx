import React from 'react';
import Repos from './repos.jsx';
//import Column from './columns.jsx';
const RepoList = (props) => {
//let arr = [ "Name","ID","Owner","Git URL", "Created At", "Updated At", "Forks Count" ,"Watchers Count"];
 return  (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      {/* {
        arr.map((prop, k) =>
        <Column key={k} prop={prop}/>
      )} */}
      {/* {props.repos.map((repo, j)=>
        Object.keys(repo).map((prop, k )=>
         if (prop ) */}
          {/* <Column key={k} Key={prop}/>
        )
      )} */}

        <th>Name</th>
        <th>ID</th>
        <th>Owner</th>
        <th>HTML URL</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Forks Count</th>
        <th>Watchers Count</th>
      <tbody>
        {props.repos.map((repo, i)=>
          // let prop = Object.keys(repo);
          <Repos key={i} /*prop={prop}*/ repo={repo}/>

        )}
      </tbody>
    </table>
  </div>
  )}

export default RepoList;