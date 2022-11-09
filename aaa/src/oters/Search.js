import React, { useEffect, useState } from 'react';

function Search() {
  useEffect(() => {
    console.log("반갑습네다.");
  }, []);
  const [key, setKey] = useState("");
  return (
    <div
      className='search'>
      <input
        type="text"
        value={key}
        placeholder='Search Here.'
        onChange={(e) => {
          setKey(e.target.value);
        }} />
    </div>
  );
}

export default Search;