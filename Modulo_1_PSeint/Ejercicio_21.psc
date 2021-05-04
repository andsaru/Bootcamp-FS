Algoritmo Ejercicio_21
	//Algoritmo que lea números enteros hasta teclear 0, 
	//y nos muestre el máximo, el mínimo y la media
	//de todos ellos. Piensa como debemos inicializar las variables.
	
	Definir num, max, min, contador, suma Como Entero;
	
	Escribir "Introduce numero";
	Leer num;
	
	min = num;
	max = num;
	contador = 0; 
	suma = 0;
	
	Mientras num <> 0 Hacer
		
		Si num > max Entonces
			max = num;
		FinSi
		
		Si num < min Entonces
			min = num;
		FinSi
		
		suma = num + suma;
		Escribir "Introduce nuevo numero";
		Leer num;
		contador = contador + 1; //Dara error cuando introduzcamos 0 al inicializarlo
		
		
		
	FinMientras
	
	Escribir "la media es: ", suma/contador;
	Escribir "El maximo es " max;
	Escribir "El minimo es " min;
	
FinAlgoritmo
