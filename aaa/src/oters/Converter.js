import React from 'react';

function Converter(){
  return(
    <div>
      <label for='minutes'>min</label>
      <input id='minutes' placeholder='minutes' type={'number'}/>
      <label for='hours'>hours</label>
      <input id='hours' placeholder='hours' type={'number'}/>
    </div>
  );
}

export default Converter;