Algoritmo Ejercicio_51
//	Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
//	número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo).
	
	Definir N, i, contador_divisores Como Entero;
	Definir es_primo Como Logico;
	
	Escribir "Introduce un numero entero positivo para comprobar si es primo";
	Leer N;
	
	// N / N mod 2 == 0; Esta sera lo que haga para averiguar si es PRIMO
	es_primo = Verdadero; // Utilizamos semaforo para hacerlo sencillo
	
	Para i = 2 Hasta N - 1 Con Paso 1 Hacer
		Si N mod i == 0 Entonces // Con esta condición, se que no es primo
			es_primo = Falso;
		FinSi
	FinPara
	
	Si es_primo Y N > 0 Entonces
		Escribir "El número ", N, " es primo";
	SiNo
		Escribir "El número ", N, " NO es primo";
	FinSi
	
	
	// COMO SE HARIA CON CONTADOR
	
//	contador_divisores = 0;
//	Para i = 2 Hasta N - 1 Hacer
//		Si N mod i == 0 Entonces // Con esta condición, se que no es primo
//			contador_divisores = contador_divisores + 1;
//		FinSi
//	FinPara
//	
//	Si contador_divisores > 0 Entonces
//		Escribir "Es primo";
//	FinSi
//	
	
	
FinAlgoritmo
