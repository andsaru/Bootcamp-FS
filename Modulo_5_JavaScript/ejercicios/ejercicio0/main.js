console.log("****************Ejercicio 1****************");
//1. Define e inicializa un array con 5 elementos string en una sola línea.

const stringArray = ["Define", "inicializa", "array", "elementos", "línea"];
console.log(stringArray);

console.log("****************Ejercicio 2****************");
//2. Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. 
//Elimina por completo el primero y añade dos nuevos números al inicio. 
//En cada paso, imprime la longitud y el array entero por consola utilizando un string template 
//del tipo: `Longitud: ${}`.

const numbersArray = [];

console.log(`ESte array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

numbersArray.push(5, 10, 15);

console.log(`ESte array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

numbersArray.shift();

console.log(`ESte array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

numbersArray.unshift(20, 25);

console.log(`ESte array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

console.log("****************Ejercicio 3****************");
//3. Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean 
//y false en caso contrario. 

// Función de flecha
const booleanCheck = (argumento) => typeof argumento === 'boolean'; // ? true : false; ESto lo puedo poner, 
                                                                    // igual que podía haber hecho el if con true o false
console.log(booleanCheck(true));
console.log(booleanCheck("true"));
console.log(booleanCheck(3));

//Función normal
function myFunction (value){
    return typeof value === 'boolean';
    }

console.log(myFunction(true));
console.log(myFunction("true"));
console.log(myFunction(3));

console.log("****************Ejercicio 4****************");
//4. Escribe una función que devuelva la longitud de un string recibido por argumento.

const lengthString = string => string.length;

console.log(lengthString("Hola mundo"));
console.log(lengthString("Escribe una función que devuelva la longitud de un string recibido por argumento"));

console.log("****************Ejercicio 5****************");
//5. Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.

//Función nombrada
function minToSeg(value) {
    return value * 60;
}

console.log(minToSeg(5));

// Función de flecha
const minSeg = min => min * 60;
console.log(minSeg(5));

console.log("****************Ejercicio 6****************");
//6. Crea una función que reciba un número y devuelva el siguiente número par. 
//(Si él es par, lo devolverá directamente).

// Función nombrada
function isEven (num){
    if (num % 2 == 0){
        return num;
    }else{
        return num + 1;
    }
}

console.log(isEven(3));
console.log(isEven(4));

console.log("****************Ejercicio 7****************");
//7. Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. 
//Puedes obviar los años bisiestos.

function funcionAños(años) {
    return años * 365;
}

console.log(`Has vivido ${funcionAños(17)} días`);

console.log("****************Ejercicio 8****************");
//8. Crea una función que reciba un array y devuelva su último elemento. 
//Prueba tu función con varios arrays de diferentes longitudes.

const lastElementOf = array => array[array.length - 1];
console.log(lastElementOf([1 ,5 ,8 ,11]), lastElementOf(["hola", "futuro"]));


console.log("****************Ejercicio 9****************");
//9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy 
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). 
//Tu función recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. 
//Ejemplo: countLegs(5, 2, 8); // output: 50

//Funcion nombrada
function contador (contadorPollos, contadorVacas, contadorCerdos) {
    let = patasPollos = 2 * contadorPollos; 
    let = patasVacas = 4 * contadorVacas;
    let = patasCerdos = 4 * contadorCerdos;
    return patasPollos + patasVacas + patasCerdos;
}

console.log(contador(5,2,8));

//Funcion de flecha
const countLegs = (pollos, vacas, cerdos) => pollos * 2 + vacas * 4 + cerdos * 4;
console.log(countLegs(5,2,8));


console.log("****************Ejercicio 10****************");
//10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

// Funcion nombrada
function sameType(a,b) {
    if (typeof a === typeof b){
        return 'Los datos son del mismo tipo';
    } else {
        return 'los datos son diferentes';
    }
}

console.log(sameType(2,2));
console.log(sameType(2,true));

// Función con operador ternario

function sameType(a,b) {
    let resultado = (typeof a === typeof b)
    ? 'Los datos son del mismo tipo'
    : 'los datos son diferentes';

    return resultado;
}

console.log(sameType(2,2));
console.log(sameType(2,true));

// funcion flecha y operador ternario
const typeCheck = (a, b) => typeof a === typeof b ? "Los datos son del mismo tipo" : "los datos son diferentes";

console.log(typeCheck(2,2));
console.log(typeCheck(2,true));

console.log("****************Ejercicio 11****************");
//11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento 
//será una palabra de la frase original. Investigar método existente de los strings para este fin.

let string1 = "El viernes es el mejor dia de la semana";

const stringSeparation = function(x) {
    return x.split(" "); // con el split a través del espacio separamos las palabras
}

console.log(stringSeparation(string1));

console.log("****************Ejercicio 12****************");
//12. Inicializa dos objetos, address1 y address2 con las propiedades: 
//provincia, ciudad, municipio, código postal, calle, número, planta, y número de puerta.

let address1 = {
    provincia : "Andalucía",
    ciudad : "Málaga",
    municipio : "Málaga",
    codigo_postal : 50148,
    calle : "calle Larios",
    numero : 111,
    planta : "tercero",
    numero_puerta: "F",
}

let address2 = {
    provincia : "Madrid",
    ciudad : "Toledo",
    municipio : "Toledo",
    codigo_postal : 14148,
    calle : "calle Marques",
    numero : 45,
    planta : "primero",
    numero_puerta: "P",
}

console.log(address1, address2);

console.log("****************Ejercicio 13****************");
//13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) 
//y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. 
//Crea una función que se llame parseDomain() que reciba por argumento un string 
//y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:
    
    /*parseDomain("codespaceacademy.com");
      output:
    {
        domain: "codespaceacademy",
        tld: "com"
    }
    */

const parseDomain = function (x) {
    const array = x.split("."); // Aquí a través del punto, separamos el dominio y el tld
    const object = {
        domain: array[0],
        tld: array[1],
    }
    return object;
}

console.log(parseDomain("codespace.com"));
console.log(parseDomain("google.es"));
console.log(parseDomain("animals.org"));

// Función de flecha
const parseDomain1 = str => {
    return{
        domain: str.split(".")[0], 
        tld: str.split(".")[1]
    }
};

console.log(parseDomain1("codespace.com"));
console.log(parseDomain1("google.es"));
console.log(parseDomain1("animals.org"));

console.log("****************Ejercicio 14****************");
//14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando 
//dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el 
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:

        /*strictEquality("5", 5); // false
          strictEquality(5, 5); // true*/

// Función anonima
const strictEqualityv2 = function (a, b) {
    return (a == b) && (typeof a == typeof b);
}

// Función flecha

const strictEquality = (num1, num2) => (num1 == num2) && (typeof num1 == typeof num2);
console.log(strictEquality("5", 5));
console.log(strictEquality(5,5));

console.log("****************Ejercicio 15****************");
//15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso 
//contrario.

const sameLength = (str1, str2) => str1.length === str2.length;

console.log(sameLength("Hola", "Mundo"));
console.log(sameLength("Hola", "Hola"));

console.log("****************Ejercicio 16****************");
//16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

const isEmpty = function (str) {
    //return str ==="" || str === undefined;
    return str ? false : true; // es conocido como un falsy values
}

console.log(isEmpty(""));
console.log(isEmpty());
console.log(isEmpty("Algo"));


console.log("****************Ejercicio 17****************");
//17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes: 
//• while
//• for
//• for of
//• forEach.

//const stringArray = ["Define", "inicializa", "array", "elementos", "línea"];
//console.log(stringArray);

let e = 0;
while (e < stringArray.length) {
    console.log(`Indice ${e}: ${stringArray[e]}`);
    e++;
};

for (let e = 0; e<= stringArray.length-1; e++) {
    console.log(`Index ${e}: ${stringArray[e]}`);
};

for (let stringArrai of stringArray) {
    console.log(stringArrai);
}

stringArray.forEach((item, index) => console.log(`Index ${index}: ${item}`));

console.log("****************Ejercicio 18****************");
//18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.

/*repeatString("No haré memes sobre el profesor. ", 2);
  output: ”No haré memes sobre el profesor. No haré memes sobre el profesor. ”*/

// Función utilizando repeat
function repeatString (a,b) { // donde a es el string y b el número de veces que queremos que se repita
    console.log(a.repeat(b));
}

repeatString("No haré memes del profesor.", 3);

// Función con bucle for
const repeatStringV2 = (string, n) => {
    let repeatedString = "";
    for (let i = 0; i < n; i++) {
        repeatedString += string;
    }
    return repeatedString;
}
repeatStringV2("No haré nada.", 2);

console.log("****************Ejercicio 19****************");
//19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva 
//la cuenta final.

/*getVoteCount({upVotes: 35, downVotes: 15}); // 20*/

//Función anónima
const getVoteCount = function (obj) {
    /*Must receive an object with the fields: upVotes, downVotes*/
    return obj.upVotes - obj.downVotes;
}

const votes = {upVotes: 35, downVotes: 15};
console.log(getVoteCount(votes));
console.log(getVoteCount({upVotes: 35, downVotes: 15}));


console.log("****************Ejercicio 20****************");
//20. Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo 
//de cada uno de los elementos.

/*getTypes(["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"]);
  output ["string", "number", "object", "number", "undefined", "object", "string"];*/

function typeOfArray(array) {
    const arrayTypes = [];
    
    array.forEach(element => {
        arrayTypes.push(typeof element);
    });

    return arrayTypes;
}

const testArray = ["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"];
console.log(typeOfArray(testArray));

console.log("****************Ejercicio 21****************");
//21. Función que dado un array de números con formato string devuelva un array con los números ya 
//parseados.
/*getParsedNumbers(["1.5", "10", "0"]); // output: [1.5, 10, 0];*/

function getParsedNumbers(array) {
    const parsedArray = [];
    
    array.forEach(element => {
        parsedArray.push(Number(element)); // con number da igual que sea decimal o lo que sea
    });

    return parsedArray;
}

console.log(getParsedNumbers(["1.5", "10", "0"]));

console.log("****************Ejercicio 22****************");
//22. Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o 
//igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

const isPositive = num => num>= 0 ? "Positive" : "Negative";
console.log(isPositive(-5));
console.log(isPositive(5));
console.log(isPositive(0));

console.log("****************Ejercicio 23****************");
//23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

//Función de flecha
const removeItem = (array, index) => array.splice(index, 1);

console.log("****************Ejercicio 24****************");
//24. Usando la función del apartado anterior, crea otra función que dado un array de números y un número a 
//filtrar, devuelva un array borrando todos las apariciones de dicho número.
/*filterNumber([1, 5, 6, 7, 5], 5); // output: [1, 6, 7]*/

//const removeItem = (array, index) => array.splice(index, 1);

// El problema aquí, es que si se encuentra dos veces el mismo número seguido, uno lo pone
const filterItem = (array, numberToFilter) => {
    
    array.forEach((element, index) => {
        
        if(element === numberToFilter) {
            removeItem(array, index);
        }
    });
}

const arrayFiltered = [1, 5, 5, 6, 7, 5]; // el output sería [ 1, 5, 6, 7 ]
filterItem(arrayFiltered, 5);
console.log(arrayFiltered);

//Con la función for, dos opciones, las dos validas
function filterNumberV2(array,num) {
    for (let i = array.length -1; i>= 0; i--){
        if (array[i] === num) {
            removeItem(array, i);
        }
    }
    return array;
} 

console.log(filterNumberV2([4, 5, 5, 5, 5, 5, 6], 5));

console.log("****************Ejercicio 25****************");
//25. Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus 
//propiedades. La segunda devolverá un array con los valores de dichas propiedades.
//Investigar los métodos keys y values del prototipo de Object.

console.log("****************Ejercicio 26****************");
//26. Crea una función que invierta un string.
/*stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN");
// output: No abusaré del café en las tardes de programación.*/


console.log("****************Ejercicio 27****************");
//27. Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.
/*compareStrings("Darth CODER", "darth coder"); // output: true*/


console.log("****************Ejercicio 28****************");
//28. Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El 
//apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.
/*capitalize("comprobaré los errores de la consola antes de pedir ayuda.");
// output: "Comprobaré Los Errores De La Consola Antes De Pedir Ayuda."*/

console.log("****************Ejercicio 29****************");
//29. Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.