import React, { useEffect, useState } from 'react';

function Poke() {
  const [id, setId] = useState(25);
  const [poke, setPoke] = useState([]);
  const fetching = async () => {
    const json = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
    setPoke(json);
    console.log(json);
  }
  useEffect(() => {
    fetching();
  }, []);
  return (
    <div>
      <ul>
        {poke.name}
      </ul>
    </div>
  );
}

export default Poke;