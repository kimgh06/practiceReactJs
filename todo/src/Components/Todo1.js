import React, { useState } from 'react';

function Todo() {
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
    <div>
      <h1>Todo list : {todos.length}</h1>
      <form onSubmit={submit}>
        <div>
          <input onChange={onC} value={todo} type="text" placeholder='Type things to do' />
          <button>제출</button>
        </div>
      </form>
      <hr />
      <ul>
        {todos.map((i, n) => {
          return <li key={n}>
            {i}
          </li>
        })}
      </ul>
    </div>
  );
}

export default Todo;
