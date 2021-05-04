Algoritmo Ejercicio_48_clase
	//	
	//	Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
	//	datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
	//	Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.
	
	Definir i, j, contador, tamano Como Entero;
	Definir nombre, nombres, aux como Caracter;
	
	tamano = 1000;
	Dimension nombres[tamano];
	
	
	//Relleno mi array de nombres 
	contador = 0;
	Repetir
		Escribir "Introduce un nombre. Déjalo vacío para acabar.";
		Leer nombre;
		
		Si nombre <> "" Entonces
			nombres[contador] = nombre;
			
			contador = contador + 1; //contador += 1; contador++;
			
		FinSi

	Mientras Que nombre <> ""
	
	Para i = 0 Hasta contador -1 con paso 1 Hacer //A partir de aqui, me interesa el ultimo nombre guardado en contador, no el de tamano,
											//daria error porque no cubre los 1000 huecos
											
		Escribir nombres[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
	//ordeno mi array con el metodo de la burbuja
	Para i = 0 hasta contador - 2 con paso 1 Hacer //Repite el ordenamiento para todos los nombres
		Para j = 0 hasta contador - 2 Con Paso 1 Hacer //Ordena un unico nombre
			Si nombres[j] > nombres[j+1] Entonces
				aux = nombres[j];
				nombres[j] = nombres[j+1];
				nombres[j+1] = aux;
			FinSi
		FinPara
	FinPara
	
	Para i = 0 Hasta contador -1 con paso 1 Hacer
		Escribir nombres[i], " " Sin Saltar;
	FinPara
	Escribir "";
	
FinAlgoritmo
