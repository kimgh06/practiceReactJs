import React,{useState} from 'react';
import './App.scss';
import Converter from './oters/Converter';

function App() {
  const [num, setNum] = useState(0);

  const plus = ()=>{
      setNum((a)=>a+1);
  }

  const minus = ()=>{
    setNum((a)=>a-1);
  }

  return (
  <div className='App'>
    <div>
    <h2>합 : {num}</h2>
      <div>
      <button onClick={minus} className='buttons'>빼기</button>
      <button onClick={plus} id='leftButton' className='buttons'>더하기</button>
      </div>
    </div>
    <Converter/>
  </div>
  );
}

export default App;
