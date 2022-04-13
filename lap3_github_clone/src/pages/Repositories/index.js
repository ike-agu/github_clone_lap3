import React from 'react';
import { SearchForm } from '../../components';
import './style.css'

export const Repositories = () => {

    return( 
        <main>
            <h1 id="title">Your GitHub Repositories</h1>
            <div id="search">
                <p>Search your Repositories here:</p>
                <SearchForm/>
            </div>
        </main>
    )
}
