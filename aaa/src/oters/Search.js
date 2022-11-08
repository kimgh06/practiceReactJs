import React, { useEffect } from 'react';

function Search() {
    useEffect(() => {
        console.log("반갑습네다.");
    }, []);
    return (
        <>
            <input type="text" placeholder='Search Here.' />
        </>
    );
}

export default Search;