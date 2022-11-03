import React from 'react';
import './oters.scss';

function oterButton({text, onClick, Name}){
    
  return(
    <>
      <button onClick={onClick} className={Name}>{text}</button>
    </>
  );
}

function oterText(){
  return (
    <>
      
    </>
  );
}

export default oterButton;