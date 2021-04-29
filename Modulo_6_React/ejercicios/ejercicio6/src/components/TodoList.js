import "./TodoList.css";
import { useContext } from "react";
import { GlobalContext } from "../App";

export default function TodoList() {

    // primero importamos usecontext y el contexto de mi app (arriba)
    // luego obtenemos del contexto el todos y el setTodos y los props van fuera
    const { todos, setTodos } = useContext(GlobalContext);

    const removeTodo = (title) => setTodos(todos.filter(todo => todo.title !== title));
    
    const toggleCompleted = (e, index) => {
        // Si es el botón, elimina la línea, sino, hace el toogle
        if (e.target.tagName !== "BUTTON") {
            const newTodos = [...todos];
            newTodos[index].completed = !newTodos[index].completed;  
            setTodos(newTodos);
            
            // -- Con map podría hacerse así -- 
            // setTodos(currentTodos => currentTodos.map((todo, idx) => {
            //     return idx === index ? {...todo, completed: !todo.completed} : todo;
            // }));
        }    
    }

    return (
        <ul className="list-group">
            {/*Prueba para ver que se imprime
            {JSON.stringify(todos)}*/}
            {todos.map((todo, index) => {
                // Si {todo.completed es verdadero (&&) que le haga  "completed" de TodoList.css. 
                // Esto se le conoce como cortocircuito
                // const className = `list-group-item ${todo.completed && "completed"}`;
                
                // Con operador ternario sería 
                const className = `d-flex justify-content-between list-group-item ${todo.completed ? "completed" : ""}`;
                // Así en vez de falso devuelve un string vacío y cuando sea verdadero el completed
                
                
                // Se podría integrar directamente en el className de abajo
                // className = {`list-group-item ${todo.completed ? "completed" : ""}`};
                
                return (
                    // En esta función de flecha, nuestra función toggleCompleted, recibe
                    // siempre evento y devuelve, ahora sí, la mia, pasandole cualquier
                    // info que yo tenga, en este caso index.
                    <li className={className} onClick={e => toggleCompleted(e, index)}>
                        {/* Para que solo tache la parte del span y no el botón también */}
                        <span>ToDo: {index}: {todo.title}</span>
                        <button className="btn btn-danger" onClick={() => removeTodo(todo.title)}>
                            X
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
