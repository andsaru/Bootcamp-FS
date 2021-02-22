Algoritmo Ejercicio_24_REPETIR
	
	Definir practica, problemas, teorica, resultado Como Real;;
	Definir nombre_alumno Como Caracter;
	
	Repetir
		
		Escribir "Introduce nombre :";
		Leer  nombre_alumno;
		
		Si nombre_alumno <> "" Entonces
			
			Escribir "Escribe las tres notas";
			Leer practica, problemas, teorica;
			
				
			si (practica>=0 y practica<=10  ) y (problemas>=0 y problemas<=10) y (teorica>=0 y teorica<=10) Entonces
				
				resultado = practica * 0.1 + problemas *0.5 + teorica * 0.4;
				Escribir  "Tu nota final es: ", resultado;
			SiNo
				Escribir "Las notas introducidas no son correctas";
			
			FinSi
		
		FinSi
		
	Mientras Que nombre_alumno <> ""
	
	Escribir "Fin del procesado";
	
FinAlgoritmo
