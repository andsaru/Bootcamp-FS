Algoritmo Ejemplo_Array2
	
	Definir my_array, tamano, indice Como Entero;
	tamano = 5;
	Dimension my_array[tamano];
	
	
	// Inicializa array con todos los elementos a 5.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = 50;
		//Escribir my_array[indice], " " Sin Saltar; //Se podria poner aqui el array de abajo
	FinPara
	
	
	// Imprime el array completo
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		Escribir my_array[indice], " " Sin Saltar;
	FinPara
	
	Escribir "";
	
FinAlgoritmo
