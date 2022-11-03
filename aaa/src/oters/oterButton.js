import React from 'react';
import './oters.scss';

function oterButton({text, onClick, Name}){
  const oterText ='';
    
  return(
    <>
      <button onClick={onClick} className={Name}>{text}</button>
    </>
  );
}

export default oterButton;