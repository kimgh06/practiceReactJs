import React,{useState} from 'react';

function Converter(){
  const [minutes, setMinutes] = useState();
  const [flipped, setFlipped] = useState(false);
  const minchange = (e)=>{
    setMinutes(e.target.value);
  }
  return(
    <div>
      <div>
      <label htmlFor='minutes'>min : </label>
      <input value={flipped ? 60*minutes: minutes} onChange={minchange} id='minutes' placeholder='minutes' type={'number'} disabled={flipped}/>
      </div>
      <div>
      <label htmlFor='hours'>hours : </label>
      <input value={flipped ? minutes: minutes/60} onChange={minchange} id='hours' placeholder='hours' type={'number'} disabled={!flipped}/>
      </div>
      <button onMouseDown={()=>{
        setMinutes(0);
      }}>Reset</button>
      <button onClick={()=>{
        setFlipped((current) =>!current);
        setMinutes(flipped ? minutes * 60 : minutes / 60);
      }}>Flips</button>
    </div>
  );
}

export default Converter;