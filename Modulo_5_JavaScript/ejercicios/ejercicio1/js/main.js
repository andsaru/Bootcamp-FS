// Apartado 1. Partimos de un HTML con un div vacío. 
// Con JS, añadir dos elementos p con un texto dentro.

const contenedor = document.getElementById("mainContainer"); // selecciono el div
const par = document.createElement("p"); //creo un elemento nuevo
const par2 = document.createElement("p");

par.textContent = "parrafo creado 1";
par2.textContent = "parrafo creado 2";

//contenedor.appendChild(par);
//contenedor.appendChild(par2);
contenedor.append(par, par2); // con append, puedo poner varios elementos a la vez

// Apartado 2. Al pulsar un botón, cambiar el color del 
// fondo del cuerpo de HTML.

// --- Solución profesor ---
// const button = document.querySelector("button");
// button.addEventListener("click", fuction(){
//     document.body.style.backgroundColor = "green";
//     //document.querySelector("body").style.backgroundColor = "red"; // Alternativa manual
// });

// Solución alternativa con arrow function
// button.addEventListener("click", () => document.body.style.backgroundColor = "red");

const colorButton = document.getElementsByTagName("button")[0]; // Tenemos que ponerle la posición [0], 
                                                                
colorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"; 
});

//  Apartado 3. Partimos de un HTML con una lista de 3 URLs (texto) 
//  de imágenes y un element img. Al hacer click en 
//  cada URL, cambiará la imagen a la que contenga dicha URL.

const listItems = document.getElementsByTagName("li");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage);
listItems[1].addEventListener("click", changeImage);
listItems[2].addEventListener("click", changeImage);

// Apartado 4. Añadir un input de tipo texto y un botón. Al pulsar el botón 
// debe escribirse el texto del input en un párrafo.
// 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada 
// pulsación de tecla del usuario.

const contenedor = document.getElementById("apartado4"); 
const par = document.createElement("p");

const textInput = document.querySelector("#textInput");
const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value; // propiedad value importante
}

     
