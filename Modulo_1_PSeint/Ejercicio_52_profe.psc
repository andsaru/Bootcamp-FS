Algoritmo Ejercicio_52_profe
	
	Definir array, i, tamano, N, contador como entero;
	tamano = 10;
	Dimension array[tamano];
	
	Para i = 0 hasta tamano - 1 con paso 1 Hacer
		array[i]=Azar(15);
		Escribir array[i], " ", Sin Saltar;
	FinPara
	
	Escribir "";
	Escribir "Introduce numero para buscarlo en el array";
	Leer N;
	
	i = 0;
	Mientras i < tamano Y array[i] <> N Hacer
		i = i + 1;
	FinMientras
	
	Si i < tamano Entonces
		Escribir "La primera coincidencia de ", N, " es el indice ", i;
	SiNo
		EScribir N, " NO esta presente en el array";
	FinSi
	
FinAlgoritmo
