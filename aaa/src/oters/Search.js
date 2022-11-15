import React, { useEffect, useState } from 'react';

function Search({ search }) {
  useEffect(() => {
    console.log("반갑습네다.");
  }, []);
  const [key, setKey] = useState("");
  const [styled, setStyled] = useState("");
  return (
    <div
      className='search'
      style={{ styled }}
    >
      <input
        type="text"
        value={key}
        placeholder={search}
        onChange={(e) => {
          setKey(e.target.value);
          setStyled({
            backgroundColor: "blue",
          });
        }} />
    </div>
  );
}

Search.defaultProps = {
  search: "Search Here.",
};

export default Search;