import React, { useState } from 'react';
import './App.scss';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onC = (e) => {
    setTodo(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((c) => [
      todo, ...c
    ])
    setTodo("");
  }
  console.log(todos);
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
