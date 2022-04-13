import React from 'react';
import { SearchForm } from '../../components';
// import { Outlet } from 'react-router-dom';

export const Repositories = () => {

    return( 
        <>
            <h2>Your repositories</h2>
            <p>Search your Repositories here:</p>
            <SearchForm/>

            {/* <aside>
                <Outlet/>
            </aside> */}
        </>
    )
}
