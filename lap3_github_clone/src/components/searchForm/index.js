import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import './style.css'


export const SearchForm = () => {

  const navigateTo = useNavigate()

    const [userInput, setUserInput] = useState("")
    const [userName, setUserName] = useState("")
    const [userRepo, setUserRepo] = useState([])

    const handleUserInput = (e) => {
        let input= e.target.value;
        setUserInput(input)
    }


        useEffect(() => {
            const fetchGithubRepo = async () => {
                try {
                  let {data} = await axios.get(` https://api.github.com/users/${userName}/repos`)
                  console.log(data)
                  setUserRepo(data)
                } catch (error) {
                  console.warn(error)
                }
              }
            fetchGithubRepo()

        }, [userName])

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserName(userInput);
        console.log(userName)
        setUserInput("")
    }

    return(
        <>


            <form onSubmit={handleSubmit}>
                <input type='text' id='searchBar' placeholder='Your GitHub username' value={userInput} onChange={handleUserInput}></input>
                <input id="searchBtn" type="submit" value="Search!"></input>
            </form>

            <aside>
                <Outlet context={[userRepo, setUserRepo]}/>
            </aside>


             <div className='repoList-div'>
               <h3>list of repos </h3>
            <ul id="repoList">
              {
              userRepo.map((repo) => (
                <li id="listItem" key={repo.id} onClick={()=> navigateTo(`/${repo.name}`)}>
                   {repo.name}
                </li>
              ))
              }
            </ul>
            </div>


        </>
    )
};
