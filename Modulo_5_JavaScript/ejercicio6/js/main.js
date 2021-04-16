// Hacer una petición a la API de https://jsonplaceholder.typicode.com/comments
// Con el array que nos llegue, iremos rellenando nuestra ul con <li> con los
// primeros 20 elementos

// Petición a la API
const URL = "https://jsonplaceholder.typicode.com/comments";
const URL2 = "https://jsonplaceholder.typicode.com/posts";


// Selector
const ul = document.getElementById("ul");
const div = document.getElementById("divEjercicio2");

// Rellenamos nuestra ul con <li> del Ejercicio 1
function fillList(array) {
    array.slice(0,20).forEach(element => {
        ul.innerHTML += `<li>${element.name}</li>`;
    });
}

// Ejercicio 2 con el api de post hay que construir un H1 para el título y un p para el body

    function fillContent(array) {
    array.slice(0,20).forEach(element => {
        
        let h1 = document.createElement("h1");
        divEjercicio2.appendChild(h1);
        h1.textContent = element.title;

        let p = document.createElement("p");
        divEjercicio2.appendChild(p);
        p.textContent = element.body;

    })
} 

// Otra forma de hacer el 2, pero el parrafo no lo imprime bien
/* function fillContent2(array2) { 
    array2.slice(0,20).forEach(element => {
        div.innerHTML += `<h2>${element.title}</li>` + `<p>${element.body}</p>`;
    });
} */


fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.status.Text);
        }
        return response.json();
    })
    .then(data => {
        fillList(data);

    // captura errores que se produzcan en algún punto anterior
    })
    .catch(error => console.log(error));

fetch(URL2).then(r => r.json()).then(data => fillContent(data));

//como paginar un array
// 