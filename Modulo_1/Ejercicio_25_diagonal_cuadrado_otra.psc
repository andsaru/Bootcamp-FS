Algoritmo sin_titulo
	
		//Escribir la OTRA diagonal del cuadraddo
		
		Definir columnas, filas, tamano_lado Como Entero;
		
		Escribir "Introduce el tamaño del cuadrado ";
		Leer tamano_lado;
		
		Para filas = 0 hasta tamano_lado -1 Hacer
			//Encargado de dibujar filas
			
			Para columnas = 0 Hasta tamano_lado -1  Hacer
				//Encargado  de dibujar columnas
				Si tamano_lado - 1 - filas == columnas Entonces 
					Escribir "*" Sin Saltar;
				SiNo
					Escribir "_" Sin Saltar;
				FinSi
				
			FinPara
			
			Escribir "";
			
		FinPara
		
FinAlgoritmo
