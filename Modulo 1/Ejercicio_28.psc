Algoritmo Ejercicio_28
	//Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
	//atrás se introducirá por teclado. Cuando llegue al final, se imprimirá ¡¡Ring!! y el programa
	//acabará .
	
	
	Definir seg Como Entero;
	
	Escribir "Comienza la cuenta atrás";
	Leer seg;
	
	Para seg = seg  Hasta 1 Con Paso -1 Hacer
				
		
		Limpiar Pantalla;
		Escribir seg;
		Esperar 1 Segundos;
		
		Si seg = 5 Entonces //En el segundo 5 ESperara 3 seg
			Esperar 3 Segundos;
		FinSi
		
	Fin Para
	
	Limpiar Pantalla;
	EScribir "¡¡RING!!";
	
FinAlgoritmo
