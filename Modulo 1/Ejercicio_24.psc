Algoritmo Ejercicio_24
	//Calcular las calificaciones de un grupo de alumnos. 
	//La nota final de cada alumno se calcula según el siguiente criterio: 
	//la parte práctica vale el 10 por ciento; la parte de problemas vale el 50 por ciento y la parte teórica el 40. 
	//El algoritmo leerá el nombre del alumno, las tres notas, escribirá el resultado 
	//y volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía. 
	//Las notas deben estar entre 0 y 10 
	//si no lo están, no imprimirá las notas, mostrara un mensaje de error y volverá a pedir otro alumno.
	
	Definir alumno como Caracter;
	Definir nota_practica, nota_problemas, nota_teoria Como Entero;
	Definir nota_final Como Real;
	
	Escribir  "Introduzca su nombre: ";
	Leer alumno;
	
	Mientras alumno<> "" Hacer
		
		Escribir "Introduce la nota practica";
		leer nota_practica;
		Escribir "Introduce la nota de problemas";
		leer nota_problemas;
		Escribir "Introduce la nota de teoria";
		Leer nota_teoria;
		
				
		si (nota_practica<=10 y nota_practica>=0) y (nota_problemas<=10 y nota_problemas>=0) y (nota_teoria<=10 y nota_teoria>=0) Entonces
			
			Escribir "El alumno " alumno Sin Saltar;
			Escribir ", con nota practica " nota_practica Sin Saltar;
			Escribir ", nota de problemas " nota_problemas Sin Saltar;
			Escribir " y nota de teoria " nota_teoria ;
			
			nota_final = nota_practica * 0.1 + nota_problemas * 0.5 + nota_teoria * 0.4;
			
			Escribir "Su nota final es " nota_final;
		Sino
			Escribir "Has escrito una nota incorrecta, vuelve a intentarlo";
		FinSi
		
		Escribir "Introduce el nombre de otro alumno";
		Leer alumno;
		
	FinMientras
	
FinAlgoritmo
