Algoritmo Ejercicio_26
	//Desarrollar un algoritmo que lea 10 n�meros por teclado y calcule el cubo de cada uno de ellos.
	//En cada lectura, tiene que indicar por pantalla el n�mero que est� pidiendo. 
	//Ejemplo de salida por pantalla:
	//	Introduce el n�mero primero.
	//	 8
	//	El cubo de 8 es 512.
	//	Introduce el n�mero segundo.
	
	Definir num, contador Como Entero;
		
	Para num = 1 Hasta 10 Hacer
		
		Escribir "Introduce el numero";
		Leer num;
		Escribir "El cubo de ", num, " es ", num ^3;
				
	Fin Para

FinAlgoritmo
