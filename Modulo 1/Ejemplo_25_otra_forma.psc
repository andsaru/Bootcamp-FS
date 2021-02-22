Algoritmo Ejemplo_25_otra_forma
	Definir columnas, filas, tamano_lado Como Entero;
	
	Escribir "Introduce el tamaño del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 1 hasta tamano_lado Hacer
		//Encargado de dibujar filas
		Escribir "*" Sin Saltar;
		
		Para columnas = 1 Hasta tamano_lado - 2  Hacer //-2 para quitar la fila de arriba y la de abajo que la escribo aparte
			//Encargado  de dibujar columnas
			Si filas == 1 O filas == tamano_lado  Entonces
				Escribir "*" Sin Saltar;
			SiNo
				Escribir " " Sin Saltar;
			FinSi
			
		FinPara
		Escribir "* " Sin Saltar;
		
		Escribir "";
		
	FinPara
FinAlgoritmo
