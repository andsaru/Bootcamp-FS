Funcion print_array (array, tamano)
	Definir indice Como Entero;
	
	Para indice = 0  hasta tamano - 1 Hacer
		Escribir array[indice], " " Sin Saltar;
	FinPara
	
	Escribir "";
	
FinFuncion

Algoritmo Ejemplo_funcion_array
	
	Definir array, array2, indice, tamano Como Entero;
	tamano = 10;
	Dimension array[tamano], array2[3];
	
	Para indice = 0 hasta tamano - 1 Hacer
		array[indice] = Aleatorio(1,1000);
	FinPara
	
	array2[0] = 3;
	array2[1] = 2;
	array2[2] = 1;
	
//	Para indice = 0  hasta tamano - 1 Hacer
//		Escribir array[indice], " " Sin Saltar;
//	FinPara
//	
//	Escribir "";
	
	print_array(array, tamano);
	print_array(array2, 3);
	
	
FinAlgoritmo
