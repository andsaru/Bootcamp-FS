const URL = "https://jsonplaceholder.typicode.com/users";


// Llama solo a los nombres
/* function printNames(array) {
    array.forEach(user => console.log(user.name))
} */

const printNames = array => array.forEach(user => console.log(user.name));

// Llama solo las direcciones
/* function printCities(array) {
    array.forEach(user => console.log(user.address.city))
} */

const printCities = array => array.forEach(user => console.log(user.address.city));

// Llama a las direcciones
/* function printLats(array) {
    array.forEach(user => console.log(user.address.geo.lat))
} */

const printLats = array => array.forEach(user => console.log(user.address.geo.lat));

// Esta es la forma más simple de hacer una petición
fetch(URL).then(r => r.json()).then(data => console.log(data));

// Con esta forma cogemos errores, mostramos varios datos...
fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.status.Text);
        }
        return response.json();
    })
    .then(data => {
        printNames(data);
        printCities(data);
        printLats(data);
    // captura errores que se produzcan en algún punto anterior
    })
    .catch(error => console.log(error));

// ----- Async / await - Alternativa a .then -----

console.clear();

async function requestURL(URL) {

    console.log(2); 
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data); 
    console.log(4);   
}

console.log(1);// para ver como funciona el flujo
requestURL(URL);
console.log(3);

// Petición con método HTTP POST en lugar de GET

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi título",
    body: "mi cuerpo de publicación"
}

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body:JSON.stringify(newPost) 

};

fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))