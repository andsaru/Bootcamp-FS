Algoritmo Ejercicio_19_repetir
	//Dada una secuencia de numeros leidos por teclado, que acabe con un menos 1,
	//Realizar el algoritmo que calcule la media aritmetica.
	//Suponemos que el usuario no insertara numero negativos.
	
	Definir N, suma, contador, media Como Real;
	
	suma = 0;
	contador = 0;
	
	Repetir
		Escribir "Escribe numeros ";
		Leer N;
		Si N <> -1 Entonces //Aqui te cuenta el -1 a la hora de hacer la media, 
						 //por eso metemos este Si Entonces dentro de repetir
			
			suma = N + suma;
			contador = contador + 1;
			
		FinSi

	Hasta Que N == -1
	
	media = suma/contador;
	
	Escribir "La media aritmetica es ", media;
	
	
FinAlgoritmo
