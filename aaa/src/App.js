import React,{useState} from 'react';
import './App.scss';

function App() {
  const [num, setNum] = useState(0);

  const plus = (e)=>{
    setNum(num+1);
  }

  const minus = ()=>{
    setNum(num-1);
  }

  return (
  <div className='App'>
    <h2>합 : {num}</h2>
    <div>
      <div>
      <button onMouseDown={minus} className='buttons'>빼기</button>
      <button onMouseDown={plus} id='leftButton' className='buttons'>더하기</button>
      </div>
    </div>
  </div>
  );
}

export default App;
