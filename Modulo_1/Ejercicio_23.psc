Algoritmo Ejercicio_23
	//Leer tres n�meros que denoten una fecha (d�a, mes, a�o). 
	//Comprobar que es una fecha v�lida. 
	//Si	no es v�lida escribir un mensaje de error y volver a pedir los n�meros. 
	//Si es v�lida escribir la fecha cambiando el n�mero del mes por su nombre. 
	//Ej. si se introduce 1 2 2006, se deber� imprimir 1 de
	//	febrero de 2006. El a�o debe ser mayor que 0. (Recuerda la estructura si m�ltiple).
	
	
	Definir dia, mes, a�o Como Entero;
	
	Escribir "Introduce el dia";
	Leer dia;
	Escribir "Introduce el mes";
	Leer mes;
	Escribir "Introduce el a�o";
	Leer a�o;
	
	si (dia > 0 Y dia <= 31) y (mes > 0 Y mes <= 12) y a�o > 0 Entonces
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
		
		Escribir " de ",  a�o;
	Sino
		Escribir "error en el a�o";
	FinSi

FinAlgoritmo
