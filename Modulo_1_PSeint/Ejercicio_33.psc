Algoritmo Ejercicio_33
	//Crear un array de tamaño 10 y que guardará números enteros introducidos por teclado.
	//Tras introducirlos todos, imprimirá cada índice junto con el valor al que corresponda.
	
	
	Definir my_array, tamano, indice, num Como Entero;
	tamano = 10;
	Dimension my_array[tamano];
	
	
	
	// Inicializa array leyendo los 10 numeros.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Leer my_array[indice];		
	FinPara
	
	
	// Imprime el array completo
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir "my_array[", indice, "] contiene el valor ", my_array[indice] ;			
	FinPara
	
	Escribir "";
	
	// QUE IMPRIMA AL REVES EL INDICE ARRAY
	
	Escribir "El array al reves seria:";
	
	Para indice = tamano - 1 Hasta 0 Con Paso -1 Hacer
		Leer my_array[indice]; // Leer my_array[tamano - 1 - indice];	 para hacerlo al reves cambiando el indice	
	FinPara
	
	
	// Imprime el array completo
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir "my_array[", indice, "] contiene el valor ", my_array[indice] ;			
	FinPara
	
	Escribir "";
	
	
FinAlgoritmo
