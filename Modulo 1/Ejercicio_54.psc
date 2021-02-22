Funcion resultado = es_primo (N)
	
	Definir i Como Entero;
	Definir resultado Como Logico;
	// N / N mod 2 == 0; Esta sera lo que haga para averiguar si es PRIMO
	resultado = Verdadero; // Utilizamos semaforo para hacerlo sencillo
	
	Para i = 2 Hasta N - 1 Con Paso 1 Hacer
		Si N mod i == 0 Entonces // Con esta condición, se que no es primo
			resultado = Falso;
		FinSi
	FinPara
	
FinFuncion

Algoritmo Ejercicio_54
	
//	Diseñar un algoritmo que lea el número N e imprima 
//	y cuente todos los números primos menores que N.
	
	Definir N, i, contador_primos Como Entero;

	
	Escribir "Introduce un numero";
	Leer N;
	
	contador_primos = 0;
	Para i = 2 hasta N con paso 1 Hacer
		Si es_primo(i) Y N > 0 Entonces
			Escribir "El número ", i, " es primo";
			contador_primos = contador_primos + 1;
//		SiNo
//			Escribir "El número ", i, " NO es primo";
		FinSi
		
	FinPara
	
	Escribir "Antes de ", N, " hay ", contador_primos, " primos";
	

	
FinAlgoritmo
