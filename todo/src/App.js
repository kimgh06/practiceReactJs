import React, { useState } from 'react';
import './App.scss';

function App() {
  const [todo, setTodo] = useState("");
  const onC = (e) => {
    setTodo(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
    console.log("Nice");
  }
  return (
    <>
      <form onSubmit={submit}>
        <div>
          <input onChange={onC} value={todo} type="text" placeholder='Type things to do' />
        </div>
        <button>제출</button>
      </form>
    </>
  );
}

export default App;
