import React from 'react';
import './App.css';

function App() {
  let num = 0;
  
  function cl(){
    num++;
  }

  return (
  <div>
    <h3>num: {num}</h3>
    <button onClick={cl}>plus</button>
  </div>
  );
}

export default App;
