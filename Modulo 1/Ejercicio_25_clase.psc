Algoritmo Ejercicio_25_clase
	
	//Algoritmo que lea un n�mero entero (lado) y a partir de �l cree un cuadrado de asteriscos con ese tama�o. 
	//Los asteriscos s�lo se ver�n en el borde del cuadrado, no en el interior.
	
	Definir columnas, filas, tamano_lado Como Entero;
	
	Escribir "Introduce el tama�o del cuadrado ";
	Leer tamano_lado;
	
	Para filas = 1 hasta tamano_lado Hacer
		//Encargado de dibujar filas
		
		Para columnas = 1 Hasta tamano_lado  Hacer
			//Encargado  de dibujar columnas
			Si filas == 1 O filas == tamano_lado O columnas == 1 O columnas == tamano_lado Entonces
				Escribir "*" Sin Saltar;
			SiNo
				Escribir " " Sin Saltar;
			FinSi
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	
	
	
FinAlgoritmo
