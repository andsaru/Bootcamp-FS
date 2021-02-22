Algoritmo Ejercicio_22_clase_otro
	
	//Hemos hecho el ejercicio de una manera generica, para cualquier numero. CODIGO RIGIDO
	
	Definir num, max, contador_2, contador_1, num_1, num_2 Como Entero;
	
	max = 100; //Aqui puedo modificar directamente el maximo y no tengo que cambiar nada mas en el programa.
	num = 0;
	
	contador_1 = 0;
	contador_2 = 0;
	
	num_1 = 2; //Con esto igual, modificando aqui la variable multiplo, no tengo que cambiar nada mas.
	num_2 = 3;
	
	Repetir
		num = num + 1;
		
		//contamos los multiplos del primer numero
		Si num mod num_1 == 0 Entonces
			
			Escribir "multiplo de ", num_1, " : ", num;
			contador_1 = contador_1 + 1;
			
		FinSi
		
		
		// contamos los multiplos del segundo numero
		Si num mod num_2 == 0 Entonces
			
			Escribir "multiplo de ", num_2, " : ", num;
			contador_2 = contador_2 + 1;
			
		FinSi
		
	Hasta Que  num==max;
	
	Escribir "Total multiplos de ", num_1, " : ", contador_1;
	Escribir "Total multiplos de ", num_2, " : ", contador_2;
	
FinAlgoritmo
