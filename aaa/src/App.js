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
  <div className='App'>
    <h2>num: {num}</h2>
    <div id='buttons'>
      <button onClick={minus}>minus</button>
      <button onClick={plus}>plus</button>
    </div>
  </div>
  );
}

export default App;
