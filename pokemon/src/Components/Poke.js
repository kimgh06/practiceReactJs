import React, { useEffect, useState } from 'react';
import './Poke.scss';

function Poke() {
  const [id, setId] = useState(25);
  const [langNo, setLangNo] = useState(2); //언어 번호
  const [langName, setLangName] = useState('ko'); //설명을 띄우기 위한 언어이름 설정
  const [generation, setGeneration] = useState(); //세대
  const [name, setName] = useState(); //포켓몬 이름
  const [version, setVersion] = useState('x'); //버전
  const [poke, setPoke] = useState([]);
  const [species, setSpecies] = useState([]);
  const [evolve, setEvolve] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetching = async (id) => {
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
      // setVersion
      console.log(json, species);
      setLoading(false);
    } catch (error) {
      alert("요청한 데이터를 찾지 못했습니다.\n" + error.message);
    }
  }
  useEffect(() => {
    fetching(id);
  }, []);
  return (
    <div className='Poke'>
      <form onSubmit={(e) => {
        e.preventDefault();
        setId(parseInt(id))
        fetching(parseInt(id));
      }}>
        <input value={id} onChange={(e) => {
          setId(e.target.value);
        }} placeholder='Type id or name in English' />
        <button>Submit</button>
      </form>
      {loading ? <h2>Loading...</h2> :
        <div style={{ display: 'flex' }}>
          <button onClick={() => {
            setId((c) => { return c - 1 });
            fetching(id - 1);
          }}>◀</button>
          <div style={{
            marginLeft: '-12px'
          }}>
            <ul>
              <div style={{
                display: 'flex',
              }}>
                <b className='pokeNum' style={{
                  color: `${species.color.name}`
                }}>{poke.id}</b>
                &nbsp;
                <div style={{ margin: '0px' }}>
                  <span>
                    {species.names[langNo].name}
                  </span>
                  &nbsp;
                  <select defaultValue={langNo} onChange={(e) => {
                    setLangNo(e.target.value);
                    setLangName(e.target[e.target.value].text);
                  }} title='Select your language'>
                    {species.names.map((i, n) => <option key={n} value={i.language.url.slice(-2, -1) - 1}>{i.language.name}</option>)}
                  </select>
                  <div>
                    {species.genera.map((i, n) => langName === i.language.name && <div key={n} value={i.language.name} >{i.genus}</div>)}
                  </div>
                </div>
              </div>
              <div>
                <img src={poke.sprites.back_default} title={`The back of ${name}`} />
                <img src={poke.sprites.front_default} title={`The front of ${name}`} />
              </div>
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
                  evolved from : <span onClick={() => {
                    setId((current) => { return parseInt(species.evolves_from_species.url.slice(42, -1)) });
                    fetching(species.evolves_from_species.url.slice(42, -1));
                  }}>
                    <b className='pokeNum' style={{
                      color: `${species.color.name}`
                    }}>{species.evolves_from_species.url.slice(42, -1)}</b>&nbsp;
                    {species.evolves_from_species.name}</span>
                </li>
              }
              {
                evolve.chain.evolves_to.length ? evolve.chain.species.name === poke.name &&
                  <li>evolves to : <span onClick={() => {
                    setId((current) => { return parseInt(evolve.chain.evolves_to[0].species.url.slice(42, -1)) });
                    fetching(evolve.chain.evolves_to[0].species.url.slice(42, -1));
                  }}><b className='pokeNum' style={{
                    color: `${species.color.name}`
                  }}>{evolve.chain.evolves_to[0].species.url.slice(42, -1)}</b>
                    &nbsp;{evolve.chain.evolves_to[0].species.name}</span>
                  </li> : ''
              }
              {
                evolve.chain.evolves_to.length ? (evolve.chain.evolves_to[0].evolves_to.length ?
                  evolve.chain.evolves_to[0].species.name === poke.name &&
                  <li>evolves to: <span onClick={() => {
                    setId(parseInt(evolve.chain.evolves_to[0].evolves_to[0].species.url.slice(42, -1)));
                    fetching(evolve.chain.evolves_to[0].evolves_to[0].species.url.slice(42, -1));
                  }}><b className='pokeNum' style={{
                    color: `${species.color.name}`
                  }}>{evolve.chain.evolves_to[0].evolves_to[0].species.url.slice(42, -1)}</b>
                    &nbsp;{evolve.chain.evolves_to[0].evolves_to[0].species.name}</span>
                  </li> : '') : ''
              }
              <div>
                <select defaultValue={version} onChange={(e) => {
                  setVersion(e.target.value);
                }}>
                  <option>--Choose--</option>
                  {
                    species.flavor_text_entries.map((i, n) => langName === i.language.name &&
                      <option key={n} value={i.version.name}>{i.version.name}</option>)
                  }
                </select>
                {
                  species.flavor_text_entries.map((i, n) => version === i.version.name && langName === i.language.name && <div
                    key={n}
                    value={i.version.name}
                  >
                    <span>{i.version.name}</span>
                    <pre>{i.flavor_text}</pre>
                  </div>)
                }
              </div>
            </ul>
          </div>
          <button onClick={() => {
            setId((c) => { return c + 1 });
            fetching(id + 1);
          }}>▶</button>
        </div>
      }
    </div >
  );
}

export default Poke;