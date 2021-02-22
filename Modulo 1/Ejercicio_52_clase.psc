Algoritmo Ejercicio_52_clase
	
	Definir array, i, tamano, N, contador como entero;
	tamano = 10;
	Dimension array[tamano];
	
	Para i = 0 hasta tamano - 1 con paso 1 Hacer
		array[i]=Azar(15);
		Escribir array[i], " ", Sin Saltar;
	FinPara
	
	Escribir "";
	Escribir "Introduce numero";
	Leer N;
	
	contador = 0;
	
	Para i = 0 hasta tamano - 1 con paso 1 Hacer
		Si N == array[i] Entonces
			//Escribir "He encontrado ", N, " en el indice ", i;
			contador = contador + 1;
			
			Si contador == 1 Entonces
				Escribir N, " esta presente en el indice, ", i;
			FinSi
		FinSi
		
	FinPara
	
FinAlgoritmo
