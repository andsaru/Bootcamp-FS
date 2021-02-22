Algoritmo Ejercicio_47
	
//	Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del
//	array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado.
	
	Definir array, tamano, i, j, aux Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	
	//Inicializamos e imprimimos estado inicial
	EScribir "EStado inicial";
	Para i = 0 hasta tamano - 1 Hacer
		array[i]=azar (100);
		Escribir array[i], " ", Sin Saltar;
	FinPara
	
	Escribir "";
	
	//ordenamos (sin acabar)
	Para j = 0 hasta tamano - 2 hacer
		Para i = 0 hasta tamano - 2 Hacer
			si array[i] > array[i+1] Entonces
				aux = array[i];
				array[i] = array[i+1];
				array[i+1] = aux;
			FinSi
		FinPara		
	FinPara

	//Imprimimos estado final
	Escribir "Estado final";
	Para i = 0 hasta tamano - 1 Hacer
		Escribir array[i], " ", Sin Saltar;
	FinPara
	
	Escribir "";
	
FinAlgoritmo
