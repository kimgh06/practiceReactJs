import React,{useState} from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const plus = ()=>{
    setNum(num+1);
  }

  const minus = ()=>{
    setNum(num-1);
  }

  return (
  <div>
    <h3 className='App'>num: {num}</h3>
    <button onClick={minus}>minus</button>
    <button onClick={plus}>plus</button>
  </div>
  );
}

export default App;
