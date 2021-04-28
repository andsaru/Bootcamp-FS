import { useEffect, useState } from "react";

export default function UseEffectsComponent() {

    const [count, setCount] = useState(0);

    // console.log("Me ejecuto cada vez que cambia el componente");

    useEffect(() => {
        console.log("Acabo de montarme");
        
        return () => console.log("Me desmonto"); // Función de flecha
    }, [])

    useEffect(() => {
        // Cambia el título de la pestaña del navegador también, utilizamo javascript
        document.title = count;
    }, [count])



    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    )
}
