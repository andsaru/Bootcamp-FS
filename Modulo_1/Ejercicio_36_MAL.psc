Algoritmo Ejercicio_36
//	Crear dos arrays de n�meros enteros de longitud 10 rellenos con n�meros aleatorios del 1 al 20.
//	Imprimir �ndice y el resultado de la multiplicaci�n de ambos elementos de los arrays del �ndice de
//	cada iteraci�n. Cuidado con los elementos del array sin inicializar
	
	//ARREGLAR,  ESTA HECHO EN DIFERENTES BUCLES, NO SALE LA MULTIPLICACION
	
	Definir my_array, indice, tamano, indice_dos, multiplicacion, multiplicacion_dos Como Entero;
	tamano = 10;
	Dimension my_array[tamano];
	
	Para indice = 0 Hasta tamano -1 Con Paso 1 Hacer
		my_array[indice] = Aleatorio(1,20) ;
		Escribir "Indice ",indice, ": ", my_array[indice];
		
	Fin Para
	
	EScribir "";
	
	Para indice_dos = 0 Hasta tamano -1 Con Paso 1 Hacer
		my_array[indice_dos] = Aleatorio(1,20) ;
		Escribir "Indice ",indice_dos, ": ", my_array[indice_dos];
		
	Fin Para
	
	
	Si indice = indice_dos Entonces
		Escribir "La multiplicacion es: ", multiplicacion * multiplicacion_dos;
	
	Fin Si
	
	
	
FinAlgoritmo
