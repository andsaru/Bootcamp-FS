Algoritmo Ejercicio_35
//	Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento
//	con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición
//	junto con su índice y finalmente, la suma de todos los valores.
	
	Definir tamano, my_array, indice, num_aleatorio, suma Como Entero;
	
	Escribir "Introduce el tamaño de tu array";
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
