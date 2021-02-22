Algoritmo Ejercicio_55
	
//	ARRAY DE DOS DIMENSIONES	
//	Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100. Imprimirla en
//	forma de matriz o tabla, con sus filas y columnas.
	
	Definir matriz, fila, columna, tamano_columnas, tamano_filas Como Entero;
	tamano_filas = 4;
	tamano_columnas = 5;
	Dimension matriz[tamano_filas, tamano_columnas]; 
	
	
	para fila = 0 hasta tamano_filas - 1 Hacer
		para columna = 0 hasta tamano_columnas - 1 hacer
			matriz[fila, columna] = Azar(100);
			Escribir matriz[fila, columna], "   ", Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
FinAlgoritmo
