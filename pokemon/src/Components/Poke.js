import React, { useEffect, useState } from 'react';

function Poke() {
  const [id, setId] = useState(25);
  const [poke, setPoke] = useState([]);
  const [inputs, setInput] = useState(id);
  const fetching = async () => {
    const json = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
    setPoke(json);
    console.log(json);
  }
  useEffect(() => {
    fetching();
  }, []);
  const Submit = (e) => {
    e.preventDefault();
    setId(inputs);
    fetching();
  }
  return (
    <div>
      <form onSubmit={Submit}>
        <input value={inputs} onChange={(e) => {
          setInput(e.target.value);
        }} />
        <button>Submit</button>
      </form>
      <ul>
        {poke.name}
        <li>
          {Math.ceil(poke.height * 30.48) / 100} m
        </li>
        <li>
          {Math.ceil(poke.weight * 45.3592) / 100} kg
        </li>
      </ul>
    </div>
  );
}

export default Poke;