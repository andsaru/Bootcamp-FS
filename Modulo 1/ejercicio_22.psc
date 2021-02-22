Algoritmo Ejercicio_22
	//Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 
	//que hay entre 1 y 100.
	
	Definir num Como Entero;
	
	num = 1;
	
	Mientras num <= 100 Hacer
		
		Si num mod 2 == 0 Entonces
			Escribir "los numeros multiplo de dos son: ", num;
		SiNo
			Si num mod 3 == 0 Entonces;
				Escribir "los numeros multiplo de tres son: ", num;
			FinSi
		FinSi
		
		num = num + 1;
		
		
	FinMientras
	
FinAlgoritmo

