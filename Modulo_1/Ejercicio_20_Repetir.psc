Algoritmo sin_titulo
	
	Definir clave Como Caracter;
	Definir contador Como Entero;
	
	contador = 0;
	
	Repetir
		
		Escribir "Introduce la clave ";
		Leer clave;
		contador =contador+1;
		
	Hasta Que contador == 3 o clave == "eureka"
	
	Si clave == "eureka" Entonces
		EScribir "correcto";
	SiNo
		Escribir "bloqueado";
	FinSi
	
FinAlgoritmo
