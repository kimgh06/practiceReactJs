import React, { useState } from 'react';
import Min2hour from './Min2hour';
import Km2mile from './Km2mile';

function Oters() {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((a) => a + 1);
  }

  const minus = () => {
    setNum((a) => a - 1);
  }

  const [index, setIndex] = useState(0);

  return (
    <div className='App'>
      <div>
        <h2>합 : {num}</h2>
        <div>
          <button onClick={minus} className='buttons' text='빼기' title='minus'>빼</button>
          <button onClick={plus} className='buttons' text='더하기' title='plus'>더</button>
        </div>
      </div>
      <hr />
      <select onChange={(e) => {
        setIndex(e.target.value);
      }} title="시행할 작업 선택">
        <option value={-1}>고르셈</option>
        <option value={0}>Minutes 2 Hours</option>
        <option value={1}>Km 2 Miles</option>
      </select>
      {index === '0' ? <Min2hour /> : ""}
      {index === '1' ? <Km2mile /> : ""}
    </div>
  );
}

export default Oters;