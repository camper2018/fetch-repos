import React from 'react';
//import Repo from './repo.jsx';
//import RepoList from './RepoList.jsx';
const Repos = ({repo}) => (
  <tr>
    <td >{repo.name}</td>
    <td >{repo.id}</td>
    <td >{repo.owner.login}</td>
    <td >{repo.git_url}</td>
    <td >{repo.created_at}</td>
    <td >{repo.updated_at}</td>
    <td >{repo.forks_count}</td>
    <td >{repo.watchers_count}</td>
  </tr>
);


export default Repos;