Algoritmo Ejercicio_57
	
	//Dada un matriz cuadrada A (array de 2 dimensiones 
	//con el mismo número de columnas que de filas, 
	//por ejemplo: 3) construir un algoritmo que permita determinar 
	//si dicha matriz es simétrica. Se considera que una matriz es simétrica 
	//si A[i,j] = A[j,i] para todos los elementos i,j de la matriz. 
	
	
	Definir matriz, filas, columnas, tamano Como Entero;
	tamano = 3;
	Dimension matriz[tamano, tamano]; 
	DEfinir es_simetrica Como Logico;
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	//Imprimimos la matriz
	para filas = 0 hasta tamano - 1 Hacer
		para columnas = 0 hasta tamano - 1 hacer
			//matriz[fila, columna] = Azar(100);
			Escribir matriz[filas, columnas], "   ", Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	es_simetrica = Verdadero;
	
	para filas = 0 hasta tamano - 1 Hacer
		para columnas = 0 hasta tamano - 1 hacer
			Si matriz[filas,columnas] <> matriz[columnas, filas] Entonces
				es_simetrica = Falso;
				
			FinSi
		FinPara
		Escribir "";
	FinPara
	
	Si es_simetrica Entonces
		EScribir "ES simetrica.";
	SiNo
		Escribir "NO es simetrica";
	FinSi
	
	
	
	
FinAlgoritmo
