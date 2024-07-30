import React, { useState } from 'react';
import './Todo.css'; 

function Todo() {
  const [first, setFirst] = useState('');
  const [todos, setTodos] = useState([]);

  const sub = () => {
    if (first.trim()) {
      setTodos([...todos, first]);
      setFirst('');
    }
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <div className="todo-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Your todo"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <button className="submit-btn" onClick={sub}>Submit</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className="delete-btn" onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
