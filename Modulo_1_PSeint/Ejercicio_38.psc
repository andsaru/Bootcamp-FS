Algoritmo Ejercicio_38
	
//	Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los
//	valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo
//	array deberá tener los valores [5,4,3,2,1].
	
	Definir array_1, array_2, tamano, indice Como Entero;
	tamano = 5;
	Dimension array_1[tamano], array_2[tamano];
	
//	Asi se declararia de manera manual
//	array_1[0] = 1;
//	array_1[1] = 2;
//	array_1[2] = 3;
//	array_1[3] = 4;
//	array_1[4] = 5;
	
	
	// Genera e imprime el primer array
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		array_1[indice] = indice + 1; 
		Escribir array_1[indice], " " Sin Saltar; 
	FinPara
	
	Escribir "";
	
	
	// Inicializar el segundo array
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		array_2[indice] = array_1[tamano - 1 - indice]; //tamano -1 es el ultimo, e indice es el primero que es
													//0, tamano baja e indice va creciendo
		
		Escribir array_2[indice], " " Sin Saltar; 
	FinPara
	
	Escribir "";
	
FinAlgoritmo
