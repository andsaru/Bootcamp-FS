Algoritmo Ejercicio_47
	
//	Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del
//	array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado.

	Definir array, tamano, aux, indice, j, i Como Entero;
	tamano = 5;
	Dimension array[tamano];
	

	//LO vemos por consola desordenado
	Escribir "Estado inicial";
	Para indice = 0 Hasta tamano -1 Hacer
		array[indice] = azar(100);
		Escribir array[indice], " ", sin saltar;
	FinPara
	
	Escribir"";
	
	//Ordenamos (Sin acabar)
	Para i = 0 Hasta tamano - 2 Hacer
		//Envia el numero mayor al final
		Para j = 0 Hasta tamano - 2 Hacer // NO hace falta que llegue al ultimo, por eso ponemos -2
			
			Si array[j] > array[j+1] Entonces //Aqui cambiamos el caracter < > para hacerlo ascendente o descendente
				aux = array[j];		//Estas tres siguientes lineas son el intercambio del valor mayor o menor segun sea < ó >
				array[j] = array[j+1];
				array[j+1] = aux;
			FinSi
			
		FinPara
	FinPara
	
	
	//Para verlo por consola ya ordenado
	Escribir "Estado final";
	Para indice = 0 Hasta tamano -1 Hacer
		Escribir array[indice], " ", sin saltar;
	FinPara
	
	Escribir "";
	
	
	
FinAlgoritmo
