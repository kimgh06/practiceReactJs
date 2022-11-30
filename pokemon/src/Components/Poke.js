import React, { useEffect, useState } from 'react';

function Poke() {
  const [id, setId] = useState(25);
  const [poke, setPoke] = useState([]);
  const [inputs, setInput] = useState(id);
  const [loading, setLoading] = useState(true);
  const fetching = async () => {
    try {
      const json = await (
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
      setPoke(json);
      console.log(json);
      setLoading(false);
    } catch {
      alert("요청하신 데이터를 찾지 못했습니다.");
    }
  }
  useEffect(() => {
    fetching();
  }, []);
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        fetching();
      }}>
        <input value={inputs} onChange={(e) => {
          setInput(e.target.value);
          setId(e.target.value);
        }} />
        <button>Submit</button>
      </form>
      {loading ? <h2>Loading...</h2> :
        <ul>
          <h3>
            {poke.name}
          </h3>
          <img src={poke.sprites.front_default} />
          <li>
            {Math.ceil(poke.height * 30.48) / 100} m
          </li>
          <li>
            {Math.ceil(poke.weight * 45.3592) / 100} kg
          </li>
        </ul>
      }
    </div>
  );
}

export default Poke;