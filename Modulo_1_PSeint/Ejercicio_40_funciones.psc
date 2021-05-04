Funcion resultado = existe (array, tamano, N)
	Definir resultado Como Logico;
	Definir indice Como Entero;
	
	resultado = Falso;
	
	para indice = 1 hasta tamano - 1 con paso 1 Hacer
		
		Si array[indice] == N Entonces
			resultado = Verdadero;
			//Escribir "Repetido :", N;
		FinSi
		
	FinPara
	
FinFuncion

Algoritmo Ejercicio_40_funciones
	
	Definir num, index, size, num_no_repeat, index_dos Como Entero;
	Definir repeat Como Logico;
	size =20;
	Dimension num_no_repeat[size];
	
	Para index = 0 hasta size - 1 con paso 1 Hacer
		
		Repetir
			num = Aleatorio(1,20);
		Mientras Que existe(num_no_repeat, index, num);
		
		num_no_repeat[index] = num;
		Escribir num_no_repeat[index], " " Sin Saltar;		
		
	FinPara
	EScribir "";
	
	
FinAlgoritmo
