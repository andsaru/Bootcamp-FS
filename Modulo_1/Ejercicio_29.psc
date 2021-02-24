Algoritmo Ejercicio_29
	//Desarrollar una calculadora de factoriales para números introducidos por teclado.
	//El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir,
	//para N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120
	
	Definir num, factorial, contador Como Real;
	
	Escribir "Introduce número: ";
	Leer num;
	
	factorial = 1; 
	
	Para contador = 1 Hasta num Con Paso 1 Hacer
		
		factorial = factorial * contador;
		Escribir contador, " " Sin Saltar;
					
	FinPara
	
	Escribir "";
	Escribir "Factorial de ", num, " será ", factorial;
	
	
FinAlgoritmo
