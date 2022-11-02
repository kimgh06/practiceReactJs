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
      <input value={minutes} onChange={minchange} id='minutes' placeholder='minutes' type={'number'} disabled={flipped}/>
      </div>
      <div>
      <label htmlFor='hours'>hours : </label>
      <input value={minutes/60} id='hours' placeholder='hours' type={'number'} disabled={!flipped}/>
      </div>
      <button onMouseDown={()=>{
        setMinutes(0);
      }}>Reset</button>
      <button onClick={()=>{
        setFlipped((current) =>!current);
      }}>Flips</button>
    </div>
  );
}

export default Converter;