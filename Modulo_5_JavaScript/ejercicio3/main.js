// Se puede crear una función para salario
function randomBetweenRange (start, end) {
    return Math.floor(Math.random() * (end - start) + 1250)
}

// 1. Generar un array de 100 objetos que tengan las siguientes propiedades:
// • Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, 
// “Empleado 2”, etc.
// • Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
// • Salario: un número aleatorio entre 1250 y 4000.

let employees = [];
for (let i = 1; i <= 100; i++) {
    const newEmployee = {
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomBetweenRange(1250, 4000) // Math.ceil(Math.random() * (4000 - 1250) + 1250)
    };
    employees.push(newEmployee);
}

// Para simplificar podemos englobar todo dentro de push
// let employees = [];
// for (let i = 1; i <= 100; i++) {
//     employees.push ({
//         cargo: `Empleado ${i}`,
//         rendimiento: Number(Math.random().toFixed(2)),
//         salario: randomBetweenRange(1250, 4000) // Math.ceil(Math.random() * (4000 - 1250) + 1250)
//     });
// }

console.log("1.Generación del array", employees);

// Apartado 1 - V2 con constructor
function Employee(cargo, rendimiento, salario) {
    this.cargo = cargo;
    this.rendimiento = rendimiento;
    this.salario = salario;
}

employees = [];
for (let i = 1; i <= 100; i++) {
    employees.push (new Employee(
        `Empleado ${i}`,
        Number(Math.random().toFixed(2)),
        randomBetweenRange(1250, 4000)) // Math.ceil(Math.random() * (4000 - 1250) + 1250)
    );
}

console.log("1.Generación del array V2", employees);

// 2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima como callback.

employees.sort(function (empleado1, empleado2){
    return empleado1.rendimiento - empleado2.rendimiento;
});

console.log("2. Ordenar por rendimiento: ", employees);

// 3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.

employees.sort((empleado1, empleado2) => empleado1.salario - empleado2.salario);

console.log("3.Ordenar por salario: ", employees);

// 4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado 
// sólo estará dentro del string Cargo. Usar una función nombrada como callback.

function sortByEmployeeNumber(empleado1, empleado2) {
    return empleado2.cargo.split(" ")[1] - empleado1.cargo.split(" ")[1];
    //return empleado2.cargo.slice(9) - empleado1.cargo.slice(9); //Alternativa más corta pero rígida
    //return empleado2.cargo.replace("Empleado ", "") - empleado2.cargo.replace("Empleado ", ""); //Alternativa
}

employees.sort(sortByEmployeeNumber);

console.log("4.Ordenar por cargo: ", employees);

// 5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.

console.log("5. Filtrar e imprimir ciertos campos: ");

// V1
employees
    .filter(employee => employee.salario > 2500)
    .forEach(employee => console.log(employee.cargo, employee.salario));

// V2
const filtered = employees.filter(employee => employee.salario > 2500);

filtered.forEach(employee => console.log("5. Filtrar e imprimir ciertos campos v2: ", employee.cargo, employee.salario));

// 6. Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer 
// el punto 5.

employees = employees.map(employee => {
    if (employee.salario < 1500) {
        // Modificar el salario
        employee.salario = employee.salario * 1.25;
    } 
    return employee;
});

console.log("6. Subir el sueldo: ", employees);
console.log("6.1 Filtrar con la nueva subida de sueldo: ", employees);

employees
    .filter(employee => employee.salario > 2500)
    .forEach(employee => console.log(employee.cargo, employee.salario));

// 7. Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que 
// a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. 

const totalCost = employees.reduce((salarySum, employee) => salarySum += employee.salario *1.15, 0); // con este 0, la suma empieza ahi y ya suma

console.log(totalCost);

// 8. Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en 
// cada apartado:
// • Despedir a los que tengan un rendimiento menor a 0.3.
// • Calcular el sueldo medio de la empresa.
// • Subir el sueldo de los que tengan un rendimiento superior a 0.7


// 8.1
employees = employees.filter(employee => employee.rendimiento >= 0.3);
console.log("8.1: Despedir a los que tengan un rendimiento menor a 0.3: ", employees);

// 8.2
let averageSalary = employees.reduce((salarySum, employee) => salarySum + employee.salario, 0) / employees.length;
averageSalary = averageSalary.toFixed(2);
console.log("8.2: Calcular el sueldo medio de la empresa: ", averageSalary);

// 8.3
//con map
employees = employees.map(employee => {
    if (employee.rendimiento > 0.7) {
        // Modificar el rendimiento
        employee.rendimiento = employee.rendimiento * 1.25;
    } 
    return employee;
});

// Con forEach
employees.forEach(employee => {
    if (employee.rendimiento > 0.7) {
        // Modificar el rendimiento
        employee.rendimiento = employee.rendimiento * 1.25;
        console.log("Subido el sueldo de ", employee.cargo);
    } 

})

console.log("8.3: Subir el sueldo de los que tengan un rendimiento superior a 0.7: ", employees);