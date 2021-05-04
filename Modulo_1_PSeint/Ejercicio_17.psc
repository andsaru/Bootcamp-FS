Algoritmo Ejercicio_17
	//calcule la suma de los N primeros números naturales. N
	//se leerá por teclado
	
	Definir N, contador, suma Como Entero;
	
	Escribir "Cuantos numeros quieres sumar ";
	Leer N;
	
	suma = 0;
	contador = 1;	
	
	Mientras contador <= N Hacer
		Escribir contador;
		suma = contador + suma;
		contador = contador + 1;
	FinMientras
	
	Escribir "La suma total de ", N, " seria ", suma;
	
FinAlgoritmo
