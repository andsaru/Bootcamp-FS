Algoritmo sin_titulo
	//Escribir la diagonal del cuadraddo
	
	Definir columnas, filas, tamano_lado Como Entero;
	
	Escribir "Introduce el tamaño del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 1 hasta tamano_lado Hacer
		//Encargado de dibujar filas
		
		Para columnas = 1 Hasta tamano_lado  Hacer
			//Encargado  de dibujar columnas
			Si filas == columnas Entonces //La fila y la columna cocincide
				Escribir "*" Sin Saltar;
			SiNo
				Escribir " " Sin Saltar;
			FinSi
			
		FinPara
		
		Escribir "";
		
	FinPara
	
FinAlgoritmo
