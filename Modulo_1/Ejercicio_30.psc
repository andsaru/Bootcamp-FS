Algoritmo Ejercicio_30_a
	
	Definir columna, fila, contador Como Entero;
		
	//Apartado A
	Escribir "Apartado A)";
	
	Para fila = 1 hasta 4 Con Paso 1 Hacer
			
		Para columna = 1 hasta fila Con Paso 1 Hacer 
			Escribir columna Sin Saltar;
			//si columnas <= filas Entonces // Como se haria con el Si
			//Escribir columnas sin saltar
		FinPara
			
		Escribir "";
			
	FinPara
	
	Escribir "";
	
	//Apartado B
	Escribir "Apartado B)";
	
	Para fila = 1 hasta 4 Con Paso 1 Hacer
		
		Para columna = 1 hasta fila Con Paso 1 Hacer 
			Escribir fila Sin Saltar;
		FinPara
		
		Escribir "";
		
	FinPara
	
	Escribir "";	
	
	//Apartado C
	Escribir "Apartado C)";
	
	contador = 1;
	
	Para fila = 1 hasta 4 Con Paso 1 Hacer
		
		Para columna = 1 hasta fila Con Paso 1 Hacer
			
			Escribir contador, " " Sin Saltar;
			contador = contador + 1;
			
		FinPara
		
		Escribir "";
		
	FinPara
	
	Escribir "";	
	
	
		
FinAlgoritmo
