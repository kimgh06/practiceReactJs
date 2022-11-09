import React, { useEffect, useState } from 'react';

function Search({ search }) {
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
        placeholder={search}
        onChange={(e) => {
          setKey(e.target.value);
        }} />
    </div>
  );
}

export default Search;