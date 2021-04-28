import { useState } from 'react'

export default function Counter() {

    //const count = useState(0);// El 0 es el valor inicial

    //const count = state[0];
    //const setCount = state[1];

    const [count, setCount] = useState(0);

    const handleClick = function (evento) {
        if (count < 10) {
            // setCount(count + 1);
            // setCount(count + 1); // Actualiza con el mismo valor
            // Actualiza de 3 en 3, cuantas más lineas añadamos de 4 en 4...y así
            setCount(currentCount => currentCount + 1);
            setCount(currentCount => currentCount + 1);
            setCount(currentCount => currentCount + 1);
        }   
    };    

    return (
        <div>
            <p>Has hecho click {count} veces</p>
            <button onClick={handleClick}>Contador +1</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>Contador -1</button>
            <button onClick={function () {setCount(0)}}>Reset</button>
        </div>
    )
}
