//------------------- Uso de JS externo-------------------

function saludo () {
    alert("Hola desde un script externo");
    console.log("Has hecho click");
}
/*con document. selecciono todo el documento anterior*/
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);


//--------------------- Depuración / logging -----------------
/* alert("Mensaje"); */
console.log("Mensaje");


//---------------------- Variables ---------------------------
//var -> function scope
//let / const -> block scope

function saludar() {

    console.log("Inicial: ", contador);

    //comprobar con var y con let y ver diferencias, var te genera la variable por su cuenta, 
    //let solo dentro de la función
    for (var contador = 0; contador < 3; contador ++ ) {
        console.log(contador);
    }
    console.log("Final: ", contador);
}

saludar();

console.clear();

// Inicialización
let day;
day = 5;

let monthName = "Octubre";

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2])

let [var1, var2, var3] = [15, 20, 25];// Avanzado
console.log(var1, var2, var3);

//const -> block scope
const x = 1;
// const y; // Error: missing = in constant
// x = 2; //Error: invalid assignment to const 'x'

console.clear();

//---------------------- Tipos de Datos ---------------------------
// Datos primitivos
let str = String("I'm a string");
let str2 = "I'm another string"; // Recomendada
console.log(typeof str, typeof str2, typeof"");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null; // Limpiar una variable
console.log(selectedColor, typeof selectedColor);

// Objects
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("2021-05-12"));
console.log(typeof new Error("Mensaje de error"));

console.clear();

//---------------------- Strings ---------------------------
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presente"));
console.log("La última ocurrencia de 'u' está en el índice", str.lastIndexOf("u"));

console.log(str.substring(1,3));

console.log("Hola mundo".concat(" .Adiós mundo."));
console.log("Hola mundo" + " .Adiós mundo"); // Equivalente a concat
str = str + ". Adiós Mundo";
str += ". Adiós Mundo.";
console.log(str);

console.log(str.replace("Mundo", "futuro")); //te cambia solo la primera que encuentra
console.log(str.replaceAll("Mundo", "futuro")); // te cambia todas
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El día de mi cumpleaños es ${day}. `); // String template
console.log("El día de mi cumpleaños es", day, ".");

// Parsing (conversion de un tipo a otro)
let number = Number("asdasda"); // NaN = Not a Number. No genera error.
console.log(number, typeof number);

number = Number("1000"); 
console.log(number, typeof number);

number += "1000"; // Entiende que es una concatenación, no una suma.
console.log(number, typeof number);

console.log("1" + 1, "1" - 1); 

//-------------------------- Objects ------------------------------

const person = { //Una vez que abrimos las llaves, lo que hay dentro es un objeto
    name: "John",
    age: 30,
    blonde: false,
    walk: function () {
        console.log("Hey, estoy saltando.");
    }, // Pre-ES6, como se llamaban antes a las funciones
    jump() { //nombre de la funcion, () argumento si las tuviera y corchetes 
        console.log("Hey, estoy saltando."); //La llamamos abajo
    } // ES6
}

console.log(typeof person, person);
console.log(person.name);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Jane"; // Cambiamos John por Jane

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

// Acceso por corchetes / Brackets notation

let nombreDeLaPropiedadQueQuiero = "blonde";
console.log(person[nombreDeLaPropiedadQueQuiero]);

// Ampliacion, como añadirle propiedades una vez ya creadas

person.children = ["Martha", "Peter"]; // Si existe la machaca, sino la crea
console.log(person);
console.log(person.children[1], person.children[0]); // Para llamarlo otra vez, escribimos otra vez person.loquesea

person.walk(); // Lamamaos a la funcion walk.
person.jump(); //Llamamos a la función jump, ya tiene su consol.log

console.log(typeof {}, typeof [], typeof ""); //aunque los corchetes representen arrays, recordad que tambien son objetos

