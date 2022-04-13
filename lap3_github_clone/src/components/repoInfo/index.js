import React, {useState}from  'react';
import { useOutletContext } from 'react-router-dom';
import {useParams} from 'react-router-dom'


export const RepoInfo = () => {

    const {repo} = useParams();

    const [userRepo, setUserRepo ]= useOutletContext();

    const chosenRepo = userRepo.filter(r => r.name === repo)


  return(
    <>
        <h1>Here is some info about your Repo {chosenRepo[0].name}:</h1>
        <p>Your Repo ID: {chosenRepo[0].id}</p>
        <p>The number of times your Repo has been forked: {chosenRepo[0].forks_count}</p>
        <p>Your Repo was last updated at: {chosenRepo[0].updated_at}</p>

    </>
  )
}
