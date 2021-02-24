Algoritmo Ejercicio_46
	
//	Dados A, B y C que representan a números enteros diferentes construir un diagrama de flujo para
//	escribir estos números de forma descendente.
	
	
	DEfinir array, tamano, aux, indice, j, i, A, B, C Como Entero;
	tamano = 3;
	Dimension array[tamano];

	Escribir "Introduce el numero 1";
	Leer A;
	Escribir "Introduce el numero 2";
	Leer B;
	Escribir "Introduce el numero 3";
	Leer C;
	
	array[0] = A;
	array[1] = B;
	array[2] = C;

	
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
