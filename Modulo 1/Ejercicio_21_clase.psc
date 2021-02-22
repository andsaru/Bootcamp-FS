Algoritmo Ejercicio_21_clase
	
	Definir N, suma, contador, maximo, minimo Como Entero;
	Definir media Como Real;
	
	Escribir "Introduce numero";
	Leer N;
	
	suma = 0;
	contador = 0;
	//maximo = 0; //si ponemos un numero negativo no lo va a leer, porque esta a 0
	//minimo = 0;
	maximo = N;
	minimo = N;
	
	Mientras N <> 0 Hacer
		
		//Calculamos el numero maximo
		Si N > maximo Entonces //Si contador == 0 O N > maximo // Otra forma de controlarlo
			//Escribir "el numero  maximo es ", N; Aqui visualizamos como se va guardando el maximo
			maximo = N;
		SiNo
			Si N < minimo Entonces
				minimo = N;
			FinSi
		FinSi
		
		//calculo de media
		contador = contador + 1;
		suma = suma + N;
		
		//nuevo numero
		Escribir "Introduce numero" ;
		Leer N;
		
		
	FinMientras
	
	Si contador == 0 Entonces //Para arreglar el error de 0 al inicializar el programa
		Escribir "No se ha introducido ningun numero";
	SiNo
		media = suma/contador;
		Escribir "la media es " media;
		
		Escribir "El maximo es ", maximo, " y el minimo es ", minimo;
	FinSi
	
	
FinAlgoritmo
