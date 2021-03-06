import React from  'react';
import { useOutletContext } from 'react-router-dom';
import {useParams} from 'react-router-dom'
import './style.css'


export const RepoInfo = () => {

    const {repo} = useParams();

    const [userRepo, setUserRepo ]= useOutletContext();

    const chosenRepo = userRepo.filter(r => r.name === repo)


  return(
    <div id="repoInfo">
        <h1>Here is some info about your Repo {chosenRepo[0].name}:</h1>
        <p><strong>{chosenRepo[0].name}</strong> Repo ID: {chosenRepo[0].id}</p>
        <p>The number of times <strong>{chosenRepo[0].name}</strong> Repo has been forked: {chosenRepo[0].forks_count} </p>
        <p><strong>{chosenRepo[0].name}</strong> repo was last updated at: {chosenRepo[0].updated_at}</p>

    </div>
  )
}
