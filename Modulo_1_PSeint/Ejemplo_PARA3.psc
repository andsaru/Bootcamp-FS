Algoritmo sin_titulo
	//Imprimir 5 asteriscos seguidos por pantalla
	
	Definir n_asterisco, contador Como Entero;
		
	Para n_asterisco = 1 Hasta 5 Con Paso 1 Hacer
		Escribir "*" Sin Saltar;
	Fin Para
	
	//Es lo mismo que 
	
	Escribir "-------------------";
	Escribir "*" Sin Saltar;
	Escribir "*" Sin Saltar;
	Escribir "*" Sin Saltar;
	Escribir "*" Sin Saltar;
	Escribir "*" ;
	
	//Lo  mismo que
	
	contador =0;
	Mientras contador <= 5 Hacer
		Escribir "*" Sin Saltar;
		contador=contador+1;
	FinMientras
	
	Escribir ""; //Para limpiar la linea final
	
	
FinAlgoritmo
