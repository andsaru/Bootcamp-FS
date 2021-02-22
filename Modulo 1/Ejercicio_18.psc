Algoritmo Ejercicio_18
	//calcule la suma de los N primeros números pares a partir
	//de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.
	
	Definir contador, N, numero_inicial, suma Como Entero; //
	
	Escribir "Escribir la cantidad de numeros pares a procesar";
	Leer N;
	
	numero_inicial = N;
	contador = 0;	
	suma = 0;
	
	//Si el numero inicial es impar, lo convierto al siguiente par.
	Si numero_inicial mod 2 <> 0 Entonces 
		numero_inicial = numero_inicial + 1;
	FinSi
	
	Escribir "La suma de " Sin Saltar;
	
	Mientras contador < N Hacer //El limite por arriba va a ser el doble de N, son 5 veces mas del numero 5 EJEMPLO
		// Escribimos los numeros en la misma linea.
		Escribir numero_inicial, " " Sin Saltar;
		
		suma = numero_inicial + suma;
		// Como nos aseguramos que el primero fuera par
		// ahora solo tengo que saltar de 2 en 2 N veces
		numero_inicial = numero_inicial + 2;
		
		contador = contador + 1;
	FinMientras
	
	Escribir "es: ", suma;

FinAlgoritmo
