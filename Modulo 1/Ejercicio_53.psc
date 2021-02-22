//	Usar una función para calcular el promedio recibiendo un array y su longitud. En el algoritmo
//	principal, leer la cantidad de datos que introducirá el usuario y posteriormente los propios datos.
//	Escribir el resultado de su promedio.
Funcion resultado = promedio (array, tamano)
	Definir suma, indice Como Entero;
	Definir resultado Como Real;
	
	suma = 0;
	Para indice = 0 hasta tamano - 1 Hacer
		suma = suma + array[indice];
	FinPara
	
	resultado = suma / tamano;
	
FinFuncion

Funcion imprimir_array (array, tamano)
	Definir i Como Entero;
	
	Para i = 0  hasta tamano - 1 Hacer
		Escribir array[i], " " Sin Saltar;
	FinPara
	
	Escribir "";
	
FinFuncion

Algoritmo Ejercicio_53
	

	Definir array, i, tamano, datos como entero;
	Escribir "Introduce el tamaño del tu array";
	Leer tamano;
	Dimension array[tamano];
	
	para i = 0 hasta tamano -1 Hacer
		Escribir " Introduce un numero ";
		Leer array[i];
	FinPara
	
	imprimir_array(array, tamano);
	
	Escribir "";
	Escribir "El promedio es: ", promedio(array, tamano);
	
	
	
FinAlgoritmo
