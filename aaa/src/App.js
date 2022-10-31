import React,{useState} from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const cl = ()=>{
    setNum(num+1);
  }

  return (
  <div>
    <h3>num: {num}</h3>
    <button onClick={cl}>plus</button>
  </div>
  );
}

export default App;
