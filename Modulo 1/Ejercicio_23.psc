Algoritmo Ejercicio_23
	//Leer tres números que denoten una fecha (día, mes, año). 
	//Comprobar que es una fecha válida. 
	//Si	no es válida escribir un mensaje de error y volver a pedir los números. 
	//Si es válida escribir la fecha cambiando el número del mes por su nombre. 
	//Ej. si se introduce 1 2 2006, se deberá imprimir 1 de
	//	febrero de 2006. El año debe ser mayor que 0. (Recuerda la estructura si múltiple).
	
	
	Definir dia, mes, año Como Entero;
	
	Escribir "Introduce el dia";
	Leer dia;
	Escribir "Introduce el mes";
	Leer mes;
	Escribir "Introduce el año";
	Leer año;
	
	si (dia > 0 Y dia <= 31) y (mes > 0 Y mes <= 12) y año > 0 Entonces
		Escribir dia ," de " sin saltar;
		
		Segun mes Hacer
			1:
				escribir "enero" sin saltar;
			2:
				escribir "febrero" sin saltar;
			3:
				escribir "marzo" sin saltar;
			4:
				escribir "abril" sin saltar;
			5:
				escribir "mayo" sin saltar;
			6:
				escribir "junio" sin saltar;
			7:
				escribir "julio" sin saltar;
			8:
				escribir "agosto" sin saltar;
			9:
				escribir "septiembre " sin saltar;
			10:
				escribir "octubre" sin saltar;
			11:
				escribir "noviembre" sin saltar;
			12:
				escribir "diciembre" sin saltar;
		FinSegun
		
		Escribir " de ",  año;
	Sino
		Escribir "error en el año";
	FinSi

FinAlgoritmo
