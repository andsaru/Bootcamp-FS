Algoritmo Ejercicio_19
	//Dada una secuencia de numeros leidos por teclado, que acabe con un menos 1,
	//Realizar el algoritmo que calcule la media aritmetica.
	//Suponemos que el usuario no insertara numero negativos.
	
	Definir N, suma, contador Como Entero;
	
	Escribir "Introduce un numero ";
	Leer N;
	
	contador = 0;
	suma = 0;
	
	Mientras N <> -1 Hacer
		suma = N + suma;
		Escribir "Introduce un nuevo numero";
		Leer N;
		contador = contador + 1;
	FinMientras
	
	Escribir "La media aritmetica es ", suma/contador;
	
FinAlgoritmo

//Repetir
//	Escribir "Escribe numeros ";
//	Leer N;
//Hasta Que N == -1
