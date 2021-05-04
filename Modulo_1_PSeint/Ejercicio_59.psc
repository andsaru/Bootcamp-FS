Algoritmo Ejercicio_59
//	Se dispone de un array de 5 páginas, 4 filas y 10 columnas, 
//	que se refieren al centro, al curso y al número de alumnos de un colegio. 
//	Imprimir la nota media por curso y la nota media máxima y su centro.
	
	Definir matriz, fila, columna, tamano_columnas, tamano_filas, pagina, tamano_paginas, contador Como Entero;
	tamano_filas = 4;
	tamano_columnas = 5;
	tamano_paginas = 3;
	Dimension matriz[tamano_paginas, tamano_filas, tamano_columnas]; 
	
	contador = 0;
	
	Para pagina = 0 hasta tamano_paginas - 1 Hacer
		Escribir "Pagina", pagina;
		Para fila = 0 hasta tamano_filas - 1 Hacer
			Escribir "Fila ", fila, ": " Sin Saltar;
			Para columna = 0 hasta tamano_columnas - 1 hacer
				matriz[pagina, fila, columna] = Azar(10);
				Escribir matriz[pagina, fila, columna], "   ", Sin Saltar;
			FinPara
			Escribir "";
		FinPara
		Escribir "";
	FinPara

FinAlgoritmo
