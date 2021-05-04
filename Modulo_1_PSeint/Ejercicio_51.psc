Algoritmo Ejercicio_51
//	Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un
//	n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo).
	
	Definir N, i, contador_divisores Como Entero;
	Definir es_primo Como Logico;
	
	Escribir "Introduce un numero entero positivo para comprobar si es primo";
	Leer N;
	
	// N / N mod 2 == 0; Esta sera lo que haga para averiguar si es PRIMO
	es_primo = Verdadero; // Utilizamos semaforo para hacerlo sencillo
	
	Para i = 2 Hasta N - 1 Con Paso 1 Hacer
		Si N mod i == 0 Entonces // Con esta condici�n, se que no es primo
			es_primo = Falso;
		FinSi
	FinPara
	
	Si es_primo Y N > 0 Entonces
		Escribir "El n�mero ", N, " es primo";
	SiNo
		Escribir "El n�mero ", N, " NO es primo";
	FinSi
	
	
	// COMO SE HARIA CON CONTADOR
	
//	contador_divisores = 0;
//	Para i = 2 Hasta N - 1 Hacer
//		Si N mod i == 0 Entonces // Con esta condici�n, se que no es primo
//			contador_divisores = contador_divisores + 1;
//		FinSi
//	FinPara
//	
//	Si contador_divisores > 0 Entonces
//		Escribir "Es primo";
//	FinSi
//	
	
	
FinAlgoritmo
