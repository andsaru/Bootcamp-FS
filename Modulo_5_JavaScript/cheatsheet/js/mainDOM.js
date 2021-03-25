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

document.body.style.backgroundColor = "red";


// Array.from(family).forEach(item => console.log(item)); // Construyo un array desde HTMLCollection
// for (let familyMember of family) {
//    console.log(familyMember);
//}