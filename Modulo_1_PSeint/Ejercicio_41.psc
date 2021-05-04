Algoritmo Ejercicio_41
//Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
//		a) Obtenga cuántos números son mayores que 0.
//		b) Calcule el promedio de los números positivos.
//		c) Obtenga el promedio de todos los números.
	
	Definir array_1, indice, tamano, contador, suma, suma_total, contador_total Como Entero;
	Escribir "Introduce tamaño del array";
	Leer tamano;
	Dimension array_1[tamano];
	
	suma = 0;
	suma_total = 0;
	contador = 0;
	contador_total = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		array_1[indice]= Aleatorio(-5, 15);
		
		Escribir array_1[indice];
		
		Si array_1[indice] > 0 Entonces
			contador = contador + 1;
			suma = suma + array_1[indice];
			
		FinSi
		
		//contador_total = contador_total + 1; //tamaño ya recoge lo que hace contador
		suma_total = suma_total + array_1[indice];

	FinPara
	
	Escribir "El promedio de los positivos son: ", suma/contador;
	Escribir "Los numeros mayores que 0 son: ", contador;
	Escribir "El promedio de todos los numeros es: ", suma_total/tamano;
	
FinAlgoritmo
