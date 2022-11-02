import React,{useState} from 'react';
import './App.scss';
import Min2hour from './oters/Min2hour';
import Km2mile from './oters/Km2mile';

function App() {
  const [num, setNum] = useState(0);

  const plus = ()=>{
      setNum((a)=>a+1);
  }

  const minus = ()=>{
    setNum((a)=>a-1);
  }
  
  const [index, setIndex] = useState(0);

  return (
  <div className='App'>
    <div>
    <h2>합 : {num}</h2>
      <div>
      <button onClick={minus} className='buttons'>빼기</button>
      <button onClick={plus} id='leftButton' className='buttons'>더하기</button>
      </div>
    </div>
    <hr/>
    <select onChange={(e)=>{
      setIndex(e.target.value);
    }}>
      <option value={-1}>고르셈</option>
      <option value={0}>Minutes 2 Hours</option>
      <option value={1}>Km 2 Miles</option>
    </select>
    {index === '0'? <Min2hour/>:""}
    {index === '1'? <Km2mile/>:""}
  </div>
  );
}

export default App;
