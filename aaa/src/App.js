import React from 'react';
import './App.css';

let num = 0;

function cl(){
  num++;
}

function App() {
  return (
  <div>
    <span>num: {num}</span>
    <button onClick={cl}>plus</button>
  </div>
  );
}

export default App;
