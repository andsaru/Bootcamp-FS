Algoritmo Ejercicio_35
//	Crear un array de n�meros donde le indicaremos el tama�o por teclado. Rellenar� cada elemento
//	con n�meros aleatorios entre 0 y 9. Posteriormente, mostrar� por pantalla el valor de cada posici�n
//	junto con su �ndice y finalmente, la suma de todos los valores.
	
	Definir tamano, my_array, indice, num_aleatorio, suma Como Entero;
	
	Escribir "Introduce el tama�o de tu array";
	Leer tamano;
	Dimension my_array[tamano];
	
	suma = 0;
	
	// Rellena nuestro array uno a uno de tamano.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		my_array[indice] = Aleatorio(0,9); 
		Escribir my_array[indice]; 
	FinPara
	
	Escribir "";
	
	// Lo imprime elemento a elemento y acumula la suma
	Para indice = 0 hasta tamano - 1 con paso 1 Hacer
		Escribir "my_array[", indice, "] contiene el valor ", my_array[indice] ;
		suma = my_array[indice] + suma;
		
	FinPara
	
	Escribir "";
	Escribir "La suma de los indices es; ", suma;

FinAlgoritmo
