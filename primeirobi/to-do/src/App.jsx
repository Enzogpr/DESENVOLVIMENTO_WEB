// src/App.jsx

import React, { useState } from 'react';
import './app.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <section className="tudo">
      <div className="container">
        <h1>LISTA DE EVENTOS</h1>

        <form className="adicao" onSubmit={handleAddTask}>
          <label htmlFor="tarefa">Adicionar novo evento</label>
          <input
            className="form-control"
            type="text"
            id="tarefa"
            placeholder="Digite aqui"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="btn">
            Adicionar
          </button>
        </form>

        <div className="lista-container">
          <ul className="todos">
            {tasks.map((task) => (
              <li key={task.id}>
                {task.text}
                <button
                  className="btn-remover"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;