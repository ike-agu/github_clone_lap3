import React, {useState} from 'react';


export const SearchForm = () => {

    const [userInput, setUserInput] = useState("")
    const [username, setUserName] = useState("")

    const handleUserInput = (e) => {
        let input= e.target.value;
        setUserInput(input)
        setUserName(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username)
        setUserInput("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={userInput} onChange={handleUserInput}></input>
            <input type="submit" value="Search!"></input>
        </form>
    )
};
