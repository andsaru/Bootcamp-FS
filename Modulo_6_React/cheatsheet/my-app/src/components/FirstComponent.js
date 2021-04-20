import { Fragment } from "react";

export default function FirstComponent(props) {

    console.log(props, typeof props);
    console.log(props.title);

    return (
        <Fragment>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : "No hay fecha"}</small>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button>Click me!</button>
       </Fragment>
    )
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
