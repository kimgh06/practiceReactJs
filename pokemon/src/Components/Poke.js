import React, { useEffect, useState } from 'react';

function Poke() {
  const [id, setId] = useState(25);
  const [lang, setLang] = useState(2);
  const [poke, setPoke] = useState([]);
  const [species, setSpecies] = useState([]);
  const [inputs, setInput] = useState(id);
  const [loading, setLoading] = useState(true);
  const fetching = async () => {
    try {
      setLoading(true);
      const json = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
      const species = await (await fetch(json.species.url)).json();
      setPoke(json);
      setSpecies(species);
      console.log(json, species);
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
          <div style={{
            display: 'flex',
          }}>
            <span>
              {poke.id} {species.names[lang].name}
            </span>
            &nbsp;
            <select defaultValue={2} onChange={(e) => {
              setLang(e.target.value);
            }}>
              {species.names.map((i, n) => <option key={n} value={n}>{i.language.name}</option>)}
            </select>
          </div>
          <img src={poke.sprites.back_default} title={`The back of ${poke.name.charAt(0).toUpperCase()}${poke.name.slice(1)}`} />
          <img src={poke.sprites.front_default} title={`The front of ${poke.name.charAt(0).toUpperCase()}${poke.name.slice(1)}`} />
          <li>
            {`${poke.name.charAt(0).toUpperCase()}${poke.name.slice(1)}`}'s height : {(poke.height) / 10} m
          </li>
          <li>
            {`${poke.name.charAt(0).toUpperCase()}${poke.name.slice(1)}`}'s weight : {(poke.weight) / 10} kg
          </li>
        </ul>
      }
    </div>
  );
}

export default Poke;