export default function List(props) {
    
    const {category, products} = props;
    
    return (
        <div className="container">
           <h2>{category}</h2>
           <ul className="list-group"> {products.map(product => {
               {/* {JSON.stringify(props.products)} 
               como un console.log para ver los objetos que lista*/ }
                return (<li key={product.id} className="list-group-item">
                            {product.name} {product.marca} {product.model}. Price: {product.price}€</li>)
                })}
           </ul>
           <button className="btn btn-success">prueba bootstrap</button>
        </div>
    )
}

/*OTRA FORMA DE IMPORTAR - DESESTRUCTURACIÓN DE OBJETOS*/
/*
export default function List({category, products}) {
    
    return (
        <div>
           <h2>{category}</h2>
           <ul>{products.map(({id, name, brand, model, price}) => {
                return (<li key="{id}"> // solamente tenemos que poner key="algo" que no se repita para elimar el error
                            {id} {name} {marca} {model}. Price: {price}€
                        </li>)
                })}
           </ul>
        </div>
    )
}

*/

/*PASO INTERMEDIO ENTRE LAS DOS OPCIONES ANTERIORES

export default function List(props) {
    
    console.log(props);

    const {category, products} = props; // Asignación avanzada de JS

    console.log(category, products);
    
    return (
        <div>
           <h2>{category}</h2>
           <ul>{products.map(({id, name, brand, model, price}) => {
                return (<li> key="{id}"> // solamente tenemos que poner key="algo" que no se repita para elimar el error
                            {id} {name} {marca} {model}. Price: {price}€
                        </li>)
                })}
           </ul>
        </div>
    )
}

*/