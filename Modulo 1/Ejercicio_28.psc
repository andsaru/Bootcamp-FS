Algoritmo Ejercicio_28
	//Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
	//atr�s se introducir� por teclado. Cuando llegue al final, se imprimir� ��Ring!! y el programa
	//acabar� .
	
	
	Definir seg Como Entero;
	
	Escribir "Comienza la cuenta atr�s";
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
	EScribir "��RING!!";
	
FinAlgoritmo
