Algoritmo Ejercicio_23_mientras
	
	Definir dia, mes, año Como Entero;
	Leer dia, mes, año;
	
	Mientras (dia > 1 Y dia <= 31) y (mes > 1 Y mes <= 12) y año > 1 Hacer
		Escribir "error en la fecha";
	FinMientras
	
	
		Escribir "Introduce el dia";
		Leer dia;
		Escribir "Introduce el mes";
		Leer mes;
		Escribir "Introduce el año";
		Leer año;
	
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
		
	

	
	
	

	
FinAlgoritmo
