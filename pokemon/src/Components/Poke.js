import React, { useEffect, useState } from 'react';

function Poke() {
  const [id, setId] = useState(25);
  const [langNo, setLangNo] = useState(2);
  const [generation, setGeneration] = useState();
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
      setGeneration(species.generation.url.slice(-2, -1));
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
        <div>
          <ul>
            <div style={{
              display: 'flex',
            }}>
              <span>
                <b style={{ color: `${species.color.name}` }}>{poke.id}</b> {species.names[langNo].name}
              </span>
              &nbsp;
              <select defaultValue={langNo} onChange={(e) => {
                setLangNo(e.target.value);
              }} title='Select your language'>
                {species.names.map((i, n) => <option key={n} value={i.language.url.slice(-2, -1) - 1}>{i.language.name}</option>)}
              </select>
            </div>
            <img src={poke.sprites.back_default} title={`The back of ${name}`} />
            <img src={poke.sprites.front_default} title={`The front of ${name}`} />
            <li>
              {generation}
              {(() => {
                switch (generation % 20) {
                  case 1:
                    return 'st';
                  case 2:
                    return 'nd';
                  case 3:
                    return 'rd';
                  default:
                    return 'th';
                }
              })()} generation
            </li>
            <li>
              {`${name}`}'s height : {(poke.height) / 10} m
            </li>
            <li>
              {`${name}`}'s weight : {(poke.weight) / 10} kg
            </li>
            {
              species.evolves_from_species &&
              <li>
                generation from : <span onClick={() => {
                  setId((current) => { return species.evolves_from_species.url.slice(42, -1) });
                  console.log(id);
                }}>{species.evolves_from_species.url.slice(42, -1)} {species.evolves_from_species.name}</span >
              </li>
            }
          </ul>
        </div>
      }
    </div>
  );
}

export default Poke;