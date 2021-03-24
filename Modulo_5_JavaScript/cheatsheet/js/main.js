//------------------- Uso de JS externo-------------------

function saludo () {
    alert("Hola desde un script externo");
    console.log("Has hecho click");
}
/*con document. selecciono todo el documento anterior*/
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);


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
    }, // ES6
    presentarse(){
        console.log(`Me llamo ${this.name} tengo ${this.age} y ${this.blonde ? 'soy rubio' : 'soy moreno'}.`)
    },
}

person.presentarse();

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

// This
const person2 = {
    name: "Thomas",
    talk() {
        console.log(this); //Se imprime el objeto, this hace referencia a person2
        console.log(`Me llamo ${this.name}`); //es lo mismo que poner console.log(person2.name)
    }
}

const person3 = {
    name: "Sarah",
    talk() {
        console.log(this); //Se imprime el objeto
        console.log(`Me llamo ${this.name}`); //es lo mismo que poner console.log(person2.name)
    }
}

person2.talk();
person3.talk();

console.clear();

//-------------------------- Arrays ------------------------------
let selectedColors = ["red", "blue"]; // Array de strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green";

console.log(selectedColors, selectedColors.length);

selectedColors.push("violet", "white");// .push añade un elemento al array
console.log(selectedColors, selectedColors.length);

selectedColors.pop(); //Quita el último elemento
console.log(selectedColors, selectedColors.length);

selectedColors.unshift("white"); // Añade un elemento al principio
console.log(selectedColors, selectedColors.length);

selectedColors.shift("white"); // Elimina el elemento del principio
console.log(selectedColors, selectedColors.length);

selectedColors.sort(); // Ordena array alfabeticamente
console.log(selectedColors, selectedColors.length);

console.log(selectedColors.indexOf("red")); // me busca el elemento que yo le diga y me devuelve el índice de ese elemento
console.log(selectedColors[selectedColors.indexOf("red") + 1]); // me meustra Violet, a partir de red

console.log("El rojo está en el índice", selectedColors.indexOf("red"));

console.log(selectedColors.slice(1, 3)); //elimina el elemento de la posición 1 y 3
console.log(selectedColors);

selectedColors.splice(1, 1); //Para eliminar un elemento (el de la posición 1, 1)
console.log("Los elementos borrados son: ", selectedColors.splice(1, 2)); //splice elimina los elementos del 1 al 3, elegimos lo que queremos que se borre
console.log("El array se ha quedado así: ", selectedColors);

console.clear();

// Ejercicio ejemplo
/*Craer un objeto 'niño que tenga las propiedades nombre, altura, género y 
 amigos. Amigos estará inicialmente vacío y añadiremos posteriormente
 3 elementos con los nombres. Después, añadiremos uno extra al inicio'*/

 const kid = {
     name: "Marc",
     height: 1.74,
     gender: "male",
     friends: [],
     loseFriend() {
        this.friends.pop();
     }
 }

 console.log(kid);
 kid.friends.push("Mary", "Peter", "Thomas") // añado posteriormente a los 3 amigos
 console.log(kid);
 kid.friends.unshift("Tony"); // añado Tony al principio
 console.log(kid);

kid.loseFriend(); //Llamamos a la función
console.log(kid);

console.clear();
//-------------------------- Condicionales ------------------------------
const randomNumber = 9;
const guessedNumber = "5";

if (typeof randomNumber !== typeof guessedNumber) { // if (randomNumber == guessedNumber && randomNumber !== guessedNumber) 
    console.log("Hey, tienes que introducir el mismo tipo.");
}

if (randomNumber === guessedNumber) {
    console.log("Has acertado el número");
} else if (randomNumber > guessedNumber) {
    console.log("El número secreto es mayor");
} else {
    console.log("El número secreto es menor");
}

// Ternary Operator
let variable = 12 < 10 ? "El primero es menor" : "el primero es mayor"; // Podemos poner el condicional en la misma línea
console.log(variable);

//Ejemplo como el de objects añadiendo la función presentarse para ver el Ternary operator
/* const person = { 
    name: "John",
    age: 30,
    blonde: false, //en funcion cambie esto a true o false, cuando lo ejecute cambiara a rubio o moreno
    walk: function () {
        console.log("Hey, estoy saltando.");
    }, 
    jump() {  
        console.log("Hey, estoy saltando."); 
    },  
    presentarse(){
        console.log(`Me llamo ${this.name} tengo ${this.age} y ${this.blonde ? 'soy rubio' : 'soy moreno'}.`)
    },
} 

person.presentarse(); */

// Switch

let option = 2;
switch (option) {
    case 1:
        //Bloque de código para valor 1
        console.log("Option vale 1");
        break;
    case 2:
        //Bloque de código para valor 2
        console.log("Option vale 2");
        break;
    case 3:
        //Bloque de código para valor 3
        console.log("Option vale 3");
        break;
    default: // "De otro modo" de PSeInt
        console.log("otra opción");
        break;
}

console.clear();
//-------------------------- Funciones/Functions ------------------------------
// --- Funciones Nombradas

// Esta es una forma 
/* function greet (name, lastName) {
    console.log(`Hola, ${name} ${lastName}. ¿Qué tal?`);
}

greet();
greet("Marcos", "Aurelio"); */

function greet (name, lastName) {
    return `Hola, ${name} ${lastName}. ¿Qué tal?`; // El RETURN, hace de break, recordar, rompe y para la función
}
console.log(greet("Marcos", "Aurelio"));

// Que devuelva el cuadrado de un número que recibe por parámetro
function square (number) {
    return number*number;
}

console.log(square(5));

// Otra forma
function cuadrado (num) {
    let cuadrado = num * num; // Siempre declaramos con const o let cuadrado
    return cuadrado;
}
console.log(cuadrado(5));

// --- Funciones Anonimas

let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort(); // Me lo ordena según ASCII
console.log(numbersArray);

// Function used to determine the order of the elements. It is expected
// o return a negative value if first argument is less than second 
// argument, zero if they're equal and a positive value otherwise. 
// If omitted, the elements are sorted in ascending, ASCII character order.

function ordersNumbers(a,b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else { 
        return 1;
    }
}

// numbersArray.sort(ordersNumbers)

/* function ordersNumbersV2(a,b) { // es la misma que la de arriba, reducida 
                                    que abajo la convierto en funcion anonima
    return a - b;
} */


numbersArray.sort(function (a, b) {return a - b}); // Ejemplo de Funcion de anonima

console.log(typeof ordersNumbers, typeof function (a,b) {return a - b});

console.log(numbersArray);

// Otro ejemplo de ordenar con sort
const person6 = {
    name: "",
    age:50,
}
const person4 = {
    name: "",
    age:55,
}
const person5 = {
    name: "",
    age:40,
}

let personsArray = [person6, person4, person5]

numbersArray.sort(function (person1, person2) {
    if (person1.age < person2.age) {
        return -1;
    } else if (person1.age === person2.age) {
        return 0;
    } else { 
        return 1;
    }
});

console.log(personsArray);

personsArray.sort(function (a,b) {return a.age-b.age}); // Función anonima de la anterior

// --- Funciones de flecha // Arrow Functions
let perimeterOfSquare = function (side) { //  Función anónima normal a transformar
    return side * 4;
}
 perimeterOfSquare = function (side) {return side *4;} // (opcional) Una única línea
 perimeterOfSquare = (side) => {return side * 4;}// Sustituyo function por la flecha después de las llaves
 perimeterOfSquare = (side) => side * 4; // Si solo quiero devolver algo, quito llaves y return.
 perimeterOfSquare = side => side * 4; // Si solo tiene 1 param, puedo quitar paréntesis.

 console.log(perimeterOfSquare(5));

/* let perimeterOfSquare = side => side*4; */ // en el primer lado pongo todos los argumentos de esa función
                                            // y a la derecha de la flecha lo que nos devuelve

// console.log(typeof function () {}); 
// console.log(typeof (() => {})); 

// Cómo transformar func anónima en func de flecha ejemplo ejercicio anterior 

numbersArray.sort(function (a,b) {return a - b}); //de anonima
numbersArray.sort ((a, b) => a - b);              // a flecha
console.log(numbersArray);

//Función de flecha que me devuelva el cuadrado de un número

let squareV2 = number => number * number;
console.log(squareV2(5));

//-------------------------- For ------------------------------
for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);
}

// Definir y rellenar un array con el índice i
// Con .push, lo más cómodo, Recomended
const ArrayX = [];

for (let i = 0; i <= 10; i++) {
    ArrayX.push(i);
}

console.log(ArrayX);

// Como lo haciamos en PSeInt
let miArray = [];

for (let i = 0; i <= 10; i++) {
    miArray[i] = i;
    console.log(`Índice: ${i} - ${miArray}`);
}

console.log(miArray);

//-------------------------- While ------------------------------
let contador = 0;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

 while (true) { // con true va hasta el infinito
    break;      //para romperlo
}

console.log("NO entra en bucle infinito");

//-------------------------- For each ------------------------------
//For each se aplica siempre que sea un array
console.log(numbersArray);
numbersArray.forEach(function (value, index){
    console.log(`Índice ${index}: ${value}`); // Equivale a lo de abajo
});

console.log(`Índice ${0}: ${1}`);
console.log(`Índice ${1}: ${2}`);
console.log(`Índice ${2}: ${5}`);
console.log(`Índice ${3}: ${15}`);
console.log(`Índice ${4}: ${51}`); 

// Otra forma
function myFunction(value, index) {
    console.log(`Índice ${index}: ${value}`);
}

numbersArray.forEach(myFunction);

// Equivalente al forEach
myFunction(numbersArray[0], 0, numbersArray);
myFunction(numbersArray[1], 1, numbersArray);
myFunction(numbersArray[2], 2, numbersArray);
myFunction(numbersArray[3], 3, numbersArray);
myFunction(numbersArray[4], 4, numbersArray);

let otherArray = [];

console.log(otherArray); // Cuidado con el navegador
numbersArray.forEach(value => otherArray.push(value));
console.log(otherArray);


//Ejemplo con el de side => side * 4 con el tipo flecha

numbersArray.forEach((value, index) => console.log(`Índice ${index}: ${value}`));

//-------------------------- For of ------------------------------
for (let item of numbersArray) { //Después de of, va cualquier cosa iterable, string, array..
    console.log(item);
}


//-------------------------- Continue ------------------------------
for (let i = 0; i < 5; i++) {
    if (i === 3 || i === 2) { // Salta el 2 y el 3
        continue; // salta a la siguiente iteración
    }
    console.log("Using continue", i);
}

//-------------------------- Break ------------------------------
let i = 0;
let k = 0;

mainLoop: while (true) {
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainLoop;
        }else if (k === 5){
            break ;
        }
    }
}