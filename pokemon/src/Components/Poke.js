import React, { useEffect, useState } from 'react';

function Poke() {
  const [id, setId] = useState(25);
  const [langNo, setLangNo] = useState(2);
  const [langStr, setLangStr] = useState();
  const [name, setName] = useState();
  const [poke, setPoke] = useState([]);
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetching = async () => {
    try {
      setLoading(true);
      const json = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
      const species = await (await fetch(json.species.url)).json();
      setPoke(json);
      setName(`${json.name.charAt(0).toUpperCase()}${json.name.slice(1)}`);
      setSpecies(species);
      console.log(json, species);
      setLoading(false);
    } catch {
      alert("요청한 데이터를 찾지 못했습니다.");
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
        <input value={id} onChange={(e) => {
          setId(e.target.value);
        }} placeholder='Type id or name in English' />
        <button>Submit</button>
      </form>
      {loading ? <h2>Loading...</h2> :
        <ul>
          <div style={{
            display: 'flex',
          }}>
            <span>
              {poke.id} {species.names[langNo].name}
            </span>
            &nbsp;
            <select defaultValue={langNo} onChange={(e) => {
              setLangNo(e.target.value);
              setLangStr(species.names[langNo].language);
              const a = species.names.indexOf(species.names[langNo]);
              console.log(a);
            }} title='Select your language'>
              {species.names.map((i, n) => <option key={n} value={n}>{i.language.name}</option>)}
            </select>
          </div>
          <img src={poke.sprites.back_default} title={`The back of ${name}`} />
          <img src={poke.sprites.front_default} title={`The front of ${name}`} />
          <li>
            {`${name}`}'s height : {(poke.height) / 10} m
          </li>
          <li>
            {`${name}`}'s weight : {(poke.weight) / 10} kg
          </li>
        </ul>
      }
    </div>
  );
}

export default Poke;