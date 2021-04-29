import { useState, useContext } from "react";
import { GlobalContext } from "../App";

export default function NewTodo() {

    // primero importamos usecontext y el contexto de mi app (arriba)
    // luego obtenemos del contexto el setTodos y los props van fuera
    const { setTodos } = useContext(GlobalContext);

    // useState("") se enlaza con el input
    const [newTodo, setNewTodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setTodos(currentTodos => [{title: newTodo, completed: false}, ...currentTodos]);

        setNewTodo("");
    }

    return (
        <form onSubmit={(handleSubmit)} className="my-4 mx-4">
            <input  type="text"
                    placeholder ="Introduce un nuevo to-do"
                    className="form-control"
                    onChange={e => setNewTodo(e.target.value)}
                    value={newTodo}
            />  
        </form>
    )
}
