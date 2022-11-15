import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

function Search({ search }) {
  useEffect(() => {
    console.log("반갑습네다.");
  }, []);
  const [key, setKey] = useState("");
  return (
    <div
      className='search'
    >
      <input
        type="text"
        value={key}
        placeholder={search}
        onChange={(e) => {
          console.log("Search for", key);
          setKey(e.target.value);
        }} />
    </div>
  );
}

Search.defaultProps = {
  search: "Search Here.",
};

export default Search;