Algoritmo Ejercicio_36
	//	Crear dos arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20.
	//	Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de
	//	cada iteración. Cuidado con los elementos del array sin inicializar
	
	Definir my_array_uno, my_array_dos, indice, tamano, multiplicacion Como Entero;
	tamano = 10;
	Dimension my_array_uno[tamano], my_array_dos[tamano];
	
	Para indice = 0 Hasta tamano -1 Con Paso 1 Hacer
		// Primero generamos aleatorio y lo asignamos a cada elemento uno a uno
		my_array_uno[indice] = Aleatorio(1,20);
		my_array_dos[indice] = Aleatorio(1,20);
		
		//una vez generados, los multiplico y guardo mi variable
		//Si pongo la multiplicacion fuera, primero, me saldria un solo resultado
		//segundo, indice solo esta declarado dentro del bucle, no fuera, indice no estaria declarado.
		multiplicacion = my_array_uno[indice] *  my_array_dos[indice];
		
		//Cuando tengo toda la informacion, la imprimo
		Escribir "Indice ",indice, ": ", my_array_uno[indice], " * ", my_array_dos[indice], " = ", multiplicacion;
	FinPara
	

	
FinAlgoritmo
