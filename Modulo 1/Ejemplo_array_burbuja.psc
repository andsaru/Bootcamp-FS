Algoritmo Ejemplo_array_burbuja
	
	Definir array, tamano, aux, indice, j, i Como Entero;
	tamano = 5;
	Dimension array[tamano];
	
	//Ordena el array 3.9.8.1.4
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	//LO vemos por consola desordenado
	Para indice = 0 Hasta tamano -1 Hacer
		Escribir array[indice], " ", sin saltar;
	FinPara
	
	Escribir"";
	
	Para i = 0 Hasta tamano - 2 Hacer
		//Envia el numero mayor al final
		Para j = 0 Hasta tamano - 2 Hacer // NO hace falta que llegue al ultimo, por eso ponemos -2
		
			Si array[j] < array[j+1] Entonces //Aqui cambiamos el caracter < > para hacerlo ascendente o descendente
				aux = array[j];		//Estas tres siguientes lineas son el intercambio del valor mayor o menor segun sea < ó >
				array[j] = array[j+1];
				array[j+1] = aux;
			FinSi

		FinPara
	FinPara
	

	//Para verlo por consola ya ordenado
	Para indice = 0 Hasta tamano -1 Hacer
		Escribir array[indice], " ", sin saltar;
	FinPara
	
	Escribir "";
	
FinAlgoritmo
