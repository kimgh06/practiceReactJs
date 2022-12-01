import React, { useEffect, useState } from 'react';
import './Poke.scss';

function Poke() {
  const [id, setId] = useState(25);
  const [langNo, setLangNo] = useState(2); //언어 번호
  const [generation, setGeneration] = useState(); //세대
  const [name, setName] = useState(); //포켓몬 이름
  const [poke, setPoke] = useState([]);
  const [species, setSpecies] = useState([]);
  const [evolve, setEvolve] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetching = async () => {
    try {
      setLoading(true);
      const json = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)).json();
      const species = await (await fetch(json.species.url)).json();
      const evolve = await (await fetch(species.evolution_chain.url)).json();
      setPoke(json);
      setName(json.name.charAt(0).toUpperCase() + json.name.slice(1));
      setSpecies(species);
      setEvolve(evolve);
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
    <div className='Poke'>
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
                <b className='pokeNum' style={{
                  color: `${species.color.name}`
                }}>{poke.id}</b> {species.names[langNo].name}
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
                evolves from : <span onClick={() => {
                  setId((current) => { return species.evolves_from_species.url.slice(42, -1) });
                  console.log(id);
                }}>{species.evolves_from_species.url.slice(42, -1)} {species.evolves_from_species.name}</span >
              </li>
            }
            {
              species.habitat !== null ? (evolve.chain.evolves_to.length && species.habitat.name !== 'rare' ? evolve.chain.species.name === poke.name &&
                <li>evolves to : {evolve.chain.evolves_to[0].species.url.slice(42, -1)}
                  &nbsp;{evolve.chain.evolves_to[0].species.name}
                </li> : '') : ''
            }
            {
              species.habitat !== null ? (evolve.chain.evolves_to.length && species.habitat.name !== 'rare' ? (evolve.chain.evolves_to[0].evolves_to.length ?
                evolve.chain.evolves_to[0].species.name === poke.name &&
                <li>evolves to: {evolve.chain.evolves_to[0].evolves_to[0].species.url.slice(42, -1)}
                  &nbsp;{evolve.chain.evolves_to[0].evolves_to[0].species.name}
                </li> : '') : '') : ''
            }
          </ul>
        </div>
      }
    </div >
  );
}

export default Poke;