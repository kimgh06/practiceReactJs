import React,{useState} from 'react';

function Converter(){
  const [minutes, setMinutes] = useState();
  const minchange = (e)=>{
    setMinutes(e.target.value);
  }
  return(
    <div>
      <h4>{minutes}</h4>
      <label htmlFor='minutes'>min</label>
      <input value={minutes} onChange={minchange} id='minutes' placeholder='minutes' type={'number'}/>
      <label htmlFor='hours'>hours</label>
      <input id='hours' placeholder='hours' type={'number'}/>
    </div>
  );
}

export default Converter;