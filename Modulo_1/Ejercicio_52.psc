Algoritmo Ejercicio_52
//	Rellenar un array con 10 n�meros aleatorios entre 1 y 15. Posteriormente, buscar un n�mero
//	introducido por teclado y nos debe decir si est� incluido en el array y el �ndice de su primera
//   coincidencia. 
	
	Definir array, i, tamano, N, contador como entero;
	tamano = 10;
	Dimension array[tamano];
	
	contador = 0;
	
	Para i = 0 hasta tamano - 1 Hacer
		array[i]=Azar(15);
		Escribir array[i], " ", Sin Saltar;
	FinPara
	
	Escribir "";
	Escribir "Introduce un n�mero para ver si esta incluido en el array";
	Leer N;
	
	Para i = 0 hasta tamano - 1 Hacer
		Si N == array[i] Entonces
			Escribir "El n�mero ha aparecido en el indice ", i;
			contador = contador + 1;
		FinSi
		
		Si contador == 1 Entonces
			i = contador;
			
		FinSi
	FinPara
	
	
	Escribir "La primera ocurrencia del n�mero: ", N, " fue en el indice ", i ;
//	Escribir "El numero ", N, " esta incluido ", contador, " veces.";
//	Escribir "";
//	
//	Escribir "";
//	
	
FinAlgoritmo
