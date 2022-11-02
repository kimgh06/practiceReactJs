import React,{useState} from 'react';

function Converter(){
  const [amount, setAmount] = useState();
  const [flipped, setFlipped] = useState(false);
  const minchange = (e)=>{
    setAmount(e.target.value);
  }
  return(
    <div>
      <div>
      <label htmlFor='minutes'>min : </label>
      <input value={flipped ? 60*amount: amount} onChange={minchange} id='minutes' placeholder='minutes' type={'number'} disabled={flipped}/>
      </div>
      <div>
      <label htmlFor='hours'>hours : </label>
      <input value={flipped ? amount: amount/60} onChange={minchange} id='hours' placeholder='hours' type={'number'} disabled={!flipped}/>
      </div>
      <button onMouseDown={()=>{
        setAmount(0);
      }}>Reset</button>
      <button onClick={()=>{
        setFlipped((c) =>!c);
        setAmount(flipped ? amount * 60 : amount / 60);
      }}>Flips</button>
    </div>
  );
}

export default Converter;