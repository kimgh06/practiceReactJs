import React, { useState } from 'react';
import './App.scss';

function App() {
  const [todo, setTodo] = useState("");
  const onC = (e) => {
    setTodo(e.target.value);
  }
  return (
    <>
      <form>
        <div>
          <input onChange={onC} value={todo} type="text" placeholder='Type things to do' />
        </div>
      </form>
    </>
  );
}

export default App;
