Algoritmo Ejercicio_25_CRUZ
	//Escribir la OTRA diagonal del cuadraddo
	
	Definir columnas, filas, tamano_lado Como Entero;
	
	Escribir "Introduce el tamaño del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 0 hasta tamano_lado -1 Hacer
		//Encargado de dibujar filas
		
		Para columnas = 0 Hasta tamano_lado -1  Hacer
			//Encargado  de dibujar columnas
			Si tamano_lado - 1 - filas == columnas o filas == columnas Entonces 
				Escribir "*" Sin Saltar;
			SiNo
				Escribir "_" Sin Saltar;
			FinSi
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	
FinAlgoritmo

//LA FORMA CON FILA Y COLUMNA = 1, LO UNICO QUE A FILA EN EL SI SE LE SUMA 1

//Para filas = 1 hasta tamano_lado  Hacer
	//Encargado de dibujar filas
	
//	Para columnas = 1 Hasta tamano_lado   Hacer
		//Encargado  de dibujar columnas
//		Si (tamano_lado - filas + 1 == columnas) o filas == columnas Entonces 
//			Escribir "*" Sin Saltar;
//		SiNo
//			Escribir "_" Sin Saltar;
//		FinSi
		
//	FinPara
	
//	Escribir "";
	
//FinPara
