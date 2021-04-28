import { useState, useEffect } from "react";

// importamos el useFetch de la carpeta hook, abajo lo llamamos
// import { useFetch } from "./hooks/useFetch";

import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  useEffect(() => {
    fetch(API_TODOS)
    .then(response => response.json())
    .then(data => setTodos(data.slice(0, 20)));
  }, [])

  // Y aquí el useFetch de la carpeta Hook
  // useFetch(API_TODOS, setTodos);
  
  return (
    <div className="App">
        <h1>Todo List</h1>
        <NewTodo setTodos={setTodos} />
        
        {/* // A mi todolist le paso todo el array pero tambien la función que modifica ese estado */}
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
