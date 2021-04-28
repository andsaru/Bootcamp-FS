import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
// importamos el useFetch de la carpeta hook, abajo lo llamamos

import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

export default function Ejercicio4() {

  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  useFetch(API_TODOS, setTodos);
  // Y aquí el useFetch de la carpeta Hook

  return (
    <div className="container pt-5">
        <h1>Todo List</h1>
        <NewTodo setTodos={setTodos} />
        
        {/* // A mi todolist le paso todo el array pero tambien la función que modifica ese estado */}
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}


