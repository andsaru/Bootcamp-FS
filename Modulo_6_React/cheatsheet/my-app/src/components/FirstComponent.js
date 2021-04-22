import { Fragment } from "react";
import PropTypes from "prop-types";

export default function FirstComponent(props) {

    //console.log(props, typeof props);
    //console.log(props.date);

    // USO DE EVENTOS EN REACT 
    // Procedimiento sin retorno
    const mySimpleFunction = function (event) {
        // Process event
        console.log(event);
    }

    // Funciones que reciben parámetros
    const myFunction = function (name) {
        return function (event) {
            console.log(name, event.target);
        };
    };

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "No hay fecha"}</small>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            {/* La forma más habitual va a ser la primera */}
            <button onClick={mySimpleFunction}>Eliminar Book2</button>
            <button onClick={myFunction("Marta")}>Imprimir Marta</button>
            <button onClick={myFunction("Miguel")}>Imprimir Miguel</button> 
            
            {/* <button onClick={() => event => console.log(1, event)}>Toda la gestión inline</button> */}
       </Fragment>
    )
}

// Poner valores por defecto

FirstComponent.defaultProps = {
    //title: "!!!!!!!!!!",
    date: "Sin fecha", // ? props.date : "No hay fecha" esto podría quitarlo, porque lo cubro aquí
    products: [], // dejar un array vacío por defecto
}

//
FirstComponent.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string, 
    products: PropTypes.array, 
}
// export default FirstComponent; // Alternativa
// SOLO se puede un export default por archivo

function SecondComponent() {
    return (
        <>
            <h1>Soy otro componente</h1>
        </>
    )
}

function ThirdComponent() {
    return (
        <div>
            <h1>Soy otro componente más</h1>
        </div>
    )
}


export {SecondComponent, ThirdComponent};
