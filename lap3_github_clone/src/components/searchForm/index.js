import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


export const SearchForm = () => {

  const navigateTo = useNavigate()

    const [userInput, setUserInput] = useState("")
    const [userName, setUserName] = useState("")
    const [userRepo, setUserRepo] = useState([])

    const handleUserInput = (e) => {
        let input= e.target.value;
        setUserInput(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserName(userInput);
        console.log(userName)
        setUserInput("")
    }

    useEffect(() => {
      const fetchGithubRepo = async () => {
        try {
          let {data} = await axios.get(` https://api.github.com/users/${userName}/repos`)
          console.log(data)
          let repoList = data.map(d => d.name)
          setUserRepo(repoList)
        } catch (error) {
          console.warn(error)
        }
      }
      fetchGithubRepo()

    }, [userName])



    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={userInput} onChange={handleUserInput}></input>
                <input type="submit" value="Search!"></input>
            </form>

            <ul>
              {
              userRepo.map((repo) => (
                <li key={repo} onClick={()=> navigateTo(`/${repo}`)}>
                   {repo}
                </li>
              ))
              }
            </ul>

        </>
    )
};
