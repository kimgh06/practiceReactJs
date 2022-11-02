import React, {useState} from 'react';

function Km2mile(){
    const [distance, setDistance] = useState();
    const [flipped, setFlipped] = useState(false);
    const changeDistance = (e)=>{
      setDistance(e.target.value);
    }
    return(
      <div>
        <div>
        <label htmlFor='minutes'>Kms : </label>
        <input value={flipped ? 1.60934*distance: distance} onChange={changeDistance} id='minutes' placeholder='KiloMeters' type={'number'} disabled={flipped}/>
        </div>
        <div>
        <label htmlFor='hours'>Miles : </label>
        <input value={flipped ? distance: distance/1.60934} onChange={changeDistance} id='hours' placeholder='Miles' type={'number'} disabled={!flipped}/>
        </div>
        <button onClick={()=>{
          setDistance(0);
        }}>Reset</button>
        <button onClick={()=>{
          setFlipped((c) =>!c);
          setDistance(flipped ? distance * 1.60934 : distance / 1.60934);
        }}>{flipped? "flipped":"flips"}</button>
      </div>
    );
}

export default Km2mile;