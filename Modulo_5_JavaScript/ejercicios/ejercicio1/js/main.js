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

// -- v2 --
/* const list = document.querySelector("ul");
const image = document.querySelector("img");

const changeImage = (e) => image.src = e.target.textContent;

listItems[0].addEventListener("click", changeImage); */


// Apartado 4. Añadir un input de tipo texto y un botón. Al pulsar el botón 
// debe escribirse el texto del input en un párrafo.
// 4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada 
// pulsación de tecla del usuario.

const ap4Paragraph = document.getElementById("fillableParagraph"); 
const ap4Input = document.querySelector("input");
const ap4Button = document.querySelectorAll("button")[1];

ap4Button.addEventListener("click", () => {
    ap4Paragraph.textContent = ap4Input.value;
    ap4Input.value = "";
});

//4.2
const ap42Paragraph = document.getElementById("fillableParagraph2"); 
const ap42Input = document.querySelectorAll("input")[1];


ap42Input.addEventListener("input", () => ap42Paragraph.textContent = ap42Input.value);

// 5. De forma similar al anterior, pero para un textarea 
// y validará si lo introducido es mayor de 15 caracteres

const textarea = document.querySelector("#textAreaToValidate");
textarea.addEventListener("input", e => {
    // if (e.target.value.length > 15){   // funcion normal o con ternarios
    //     e.target.style.color = "red";
    // } else {
    //     e.target.style.color = "green";
    // }

    e.target.style.color = e.target.value.length > 15 ? "red" : "green";
});

// 6. Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. 
// Al pulsar el botón nos validará si el número es par o no. En caso negativo, 
// cambiar los bordes del input a rojo.
// Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.

const evenInput = document.querySelector("#evenNumberInput");
evenInput.nextElementSibling.addEventListener("click", () => {
    if (evenInput.value % 2 !== 0) {
        evenInput.style.border = "2px solid red";
    } else {
        evenInput.style.border = "";

    }        
});    

// 7. Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento 
// (“Elemento X”) usando un bucle for.

const ul = document.getElementById("listToFill");

for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}`;
    ul.appendChild(newLi); 
}

// 8. Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. 
// Si pulso primero el botón y luego el enlace, se me abre en una nueva pestaña.

const newTabButton = document.querySelector("#newTab");
const link = document.querySelector("a");
newTabButton.addEventListener("click", () => link.target = "_blank");

// 9. Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, 
// verde y azul. Al seleccionar un color del select, cambiar el color del párrafo.

const ap9Paragraph = document.querySelector("#colorsParagraph");
document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9Paragraph.style.color = e.target.value;
});