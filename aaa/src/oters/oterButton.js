import React from 'react';
import './oters.scss';

function oterButton({text, onClick, className}){
  return(
    <>
      <button onClick={onClick} className={className}>{text}</button>
    </>
  );
}

export default oterButton;