Algoritmo Ejercicio_20
	//Teniendo en cuenta que la clave es eureka, escribir un algoritmo que nos pida una clave. Solo
	//tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
	//que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
	
	Definir clave Como Caracter;
	Definir contador Como Entero;
	DEfinir acierto Como Logico;;
	
	
	acierto = Falso;
	contador = 0;
	
	
	
	Mientras acierto = Falso y contador < 3 Hacer
		
		Escribir "introduzca la clave: ";
		Leer clave;
		
		Si clave = "eureka" Entonces
			Escribir "correcto";
			acierto = Verdadero;
		FinSi
		
		
		contador = contador + 1;
		
	FinMientras
	
	Si contador = 3 y acierto = Falso Entonces
		Escribir "Bloqueado";
	FinSi
	
	
	
FinAlgoritmo
