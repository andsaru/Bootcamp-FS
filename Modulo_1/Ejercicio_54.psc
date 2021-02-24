Funcion resultado = es_primo (N)
	
	Definir i Como Entero;
	Definir resultado Como Logico;
	// N / N mod 2 == 0; Esta sera lo que haga para averiguar si es PRIMO
	resultado = Verdadero; // Utilizamos semaforo para hacerlo sencillo
	
	Para i = 2 Hasta N - 1 Con Paso 1 Hacer
		Si N mod i == 0 Entonces // Con esta condici�n, se que no es primo
			resultado = Falso;
		FinSi
	FinPara
	
FinFuncion

Algoritmo Ejercicio_54
	
//	Dise�ar un algoritmo que lea el n�mero N e imprima 
//	y cuente todos los n�meros primos menores que N.
	
	Definir N, i, contador_primos Como Entero;

	
	Escribir "Introduce un numero";
	Leer N;
	
	contador_primos = 0;
	Para i = 2 hasta N con paso 1 Hacer
		Si es_primo(i) Y N > 0 Entonces
			Escribir "El n�mero ", i, " es primo";
			contador_primos = contador_primos + 1;
//		SiNo
//			Escribir "El n�mero ", i, " NO es primo";
		FinSi
		
	FinPara
	
	Escribir "Antes de ", N, " hay ", contador_primos, " primos";
	

	
FinAlgoritmo
