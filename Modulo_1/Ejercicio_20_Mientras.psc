Algoritmo sin_titulo
	//Teniendo en cuenta que la clave es eureka, escribir un algoritmo que nos pida una clave. Solo
	//tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
	//que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
	
	Definir clave Como Caracter;
	Definir contador Como Entero;
	
	contador = 1;
	
	Escribir "Introduzca clave";
	leer clave;
	
	Si clave = "eureka" Entonces
		Escribir "correcto";
	FinSi
	
	
	Mientras clave <> "eureka" y contador < 3 Hacer
		
		Escribir "introduzca la clave: ";
		Leer clave;
		
		Si clave = "eureka" Entonces
			Escribir "correcto";
		FinSi
		
		contador = contador + 1;
		
	FinMientras
	
	Si contador = 3 y clave <> "eureka" Entonces
		Escribir "Bloqueado";
	FinSi
	
	
	
FinAlgoritmo

//OTRA FORMA CON MIENTRAS

//Definir clave Como Caracter;
//Definir contador Como Entero;

//contador = 1;

//Escribir "Introduzca clave";
//leer clave;

//Mientras clave <> "eureka" y contador < 3 Hacer;
//	Escribir "error";
//	contador = contador + 1;
//	Leer clave;
//FinMientras

//Si clave == "eureka" Entonces
//	Escribir "Bienvenido";
//SiNo
//	Escribir "Bloqueado";
//FinSi

