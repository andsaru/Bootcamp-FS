//------------------- DOM (Document object Model) -------------------
// Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);
/* document.title = "Cheatsheet JavaScript (DOM)"; */
document.title += " (DOM)";
console.log(document.title);

// Selectores / Selectors
//seleccionamos por etiquetas (en este caso DIV)
const family = document.getElementsByTagName("div");
console.log(family);

//seleccionamos al abuelo por su ID
const grandparent = document.getElementById("grandparent");
console.log(grandparent);

//seleccionamos por clases
const parents = document.getElementsByClassName("parent"); // HTMLCollection
const parent1 = parents[0]; // para mostrar el indice 0 de la clase parent
const parent2 = document.getElementsByClassName("parent")[1]; // otra forma de acceder, en este caso al índice 1

console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);
console.log(children[2]); //accedemos al índice 2

//selector universal
let element = document.querySelectorAll(".grandparent div"); // selecciona multiples elementos
console.log(element);

// ---------Ejemplo Ejercicio -----------
//cambiamos el color de parent1
parent1.style.backgroundColor = "#333";

document.body.style.backgroundColor = "cyan"; 
// -- Fin ejemplo --


// --- Nodos ---
// Desde el hijo, puedo ir al padre y cambiar el estilo también

children[0].parentNode.style.backgroundColor = "yellow"; // ejemplo con parentNode

// Con función de flecha
const changeBackground = (element, color) => element.style.backgroundColor = color;

// Asi sería en función
function changeBackgroundV2 (element) {
    element.style.backgroundColor = color;
}

changeBackground(children[0], "#333"); // ya está declarada la función, puedo cambiar el hijo
changeBackground(parent1, "green"); // y el padre
changeBackground(parent2.children[1], "blue");
changeBackground(children[0].parentNode.parentNode, "#ddd"); // un parentnode salta al padre, otro más saltaría al abuelo

changeBackground(parent1.children[1].previousElementSibling, "red") // coge el elemento hermano anterior que es el child1

grandparent.children[1].previousElementSibling.lastElementChild;
// empieza en el abuelo-va a su hijo(parent2)(Eso es grandparent.children[1])
// luego va a parent1(previousElementSibling) y acaba en child2(lastElementChild)

/*Más de un salto nunca haremos, generalmento usaremos uno*/

// --- Propiedades elementos ---

//grandparent.innerHTML="<h1>Hola futuro</h1>";
//children[0].innerHTML = "Child V2";
console.log(children[0].innerHTML); //Imprime etiquetas
console.log(children[0].textContent); //Ignora etiquetas HTML

console.clear();

console.log("Classlist: ", parent1.classList);
parent1.classList.remove("bg-dark"); // elimina una clase .remove(bg-dark)
console.log("Classlist: ", parent1.classList);
parent1.classList.add("bg-red"); // añade una clase .add(bg-red)
console.log("Classlist: ", parent1.classList);
// parent1.className += " bg-dark"; // puede modificar todo lo anterior? mejor no utilizar

//parent1.classList.toggle("bg-red");// .toggle: si lo tiene lo añade, y si lo tiene lo quita
parent1.addEventListener("click", (e) => e.target.classList.toggle("bg-red"));

parent1.setAttribute("name", "nombre-de-parent-1"); // puedo cambiar cualquier atributo de un elemento(del HTML)

console.clear();

// -- Create / Remove elements
let myDiv = document.createElement("div"); //creo un elemento nuevo
myDiv.id = "new-Div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv); // implanto el div nuevo, al
parent1.appendChild(myDiv2); //un nodo solo puede existir en un sitio a la vez
                             //asi que hacemos CLONENODE

myDiv2 = myDiv.cloneNode(true); // Creamos un nuevo nodo a partir del original
                                // TRUE para hacer una copia profunda
                                // FALSE hace una copia pero no copia todos los elementos
parent2.appendChild(myDiv2);
myDiv2.textContent = "Child 5";

myDiv.remove(); // Elimino el div nuevo de parent1

let myDiv3 = myDiv.cloneNode();
child2.before(myDiv3); // lo añade antes de child2
parent2.after(myDiv.cloneNode()); // me lo añade después de parent2 que es el ultimo

// ---- Ejercicio ----
// Crear una función que me devuelva un nodo nuevo y que reciba etiqueta e ID

function createNode(label, id) {
    let newNode = document.createElement(label); // Lo pongo sin comillas porque lo voy a declarar desde fuera
        newNode.id = id;

    return newNode;
}

let newDiv = createNode("div", "identificador1");
let link = createNode ("a", "mainLink");
let newTable = createNode("table", "identificador2");

link.textContent = "texto de enlace";
link.setAttribute("href", "http://google.com");

document.body.appendChild(link);
parent2.appendChild(newDiv);
parent2.appendChild(newTable);

// --- Fin ejercicio ---

// --- Eventos / Events ---

const colorButton = document.getElementsByTagName("button")[0]; // Tenemos que ponerle la posición [0], 
                                                                //porque sino nos devuelve un html collection
//console.log(colorButton);
colorButton.addEventListener("click", function (event) {
    //console.log(event); // cuando pulso el boton me da información en la consola
    console.log(event.target); // me dice quien lo ha hecho
    //document.body.style.backgroundColor = "green"; // Cuando lo pulse cambia a verde
    //document.body.classList.toggle("bg-red"); // No funciona pero deberia cambiar a rojo el fondo y quitarlo cada vez que pulse (evento toggle)
    //console.log(event.target.tagName); // me dice su etiqueta

    // Para controlar eventos por ejemplo
    if (event.ctrlKey) { // pulsando ctrl + clic para cambiar el color
        document.body.style.backgroundColor = "green";
    }
    console.log(`X: ${event.clientX} | Y: ${event.clientY}`); // muestra por consola por donde se mueve el ratón
    console.log(`Alt: ${event.altKey}. Shift: ${event.shiftKey}. Ctrl: ${event.ctrlKey}`);
});

const emailInput = document.querySelector("#emailInput");

emailInput.addEventListener("focus", inputListener); // cuando pulso dentro del input, evento focus se activa
emailInput.addEventListener("blur", inputListener); // cuando te sales del Input, el evento es blur

function inputListener (e) { // Con esta funcion, dentro del input se pone rojo(focus), y cuando pulso fuera(blur) se eleimina
    
    console.log("Tipo de evento: ", e.type);
    if (e.type === "focus") {
        e.target.classList.add("bg-red");
    } else if(e.type === "blur") {
        e.target.classList.remove("bg-red");
    }
}

// función changeTitle (de flecha)
const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value; // propiedad value importante
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

// función para ver la coordenada del raton en todo el cuerpo
function coords(e) {
    document.querySelectorAll("h1")[3].textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}

document.body.addEventListener("mousemove", coords);






// Array.from(family).forEach(item => console.log(item)); // Construyo un array desde HTMLCollection
// for (let familyMember of family) {
//    console.log(familyMember);
//}