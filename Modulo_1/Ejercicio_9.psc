Algoritmo Ejercicio_9
	//Construir un diagrama de flujo que dado como datos 5 calificaciones de un alumno 
	//imprima el promedio y la palabra aprobado si el alumno tiene un promedio mayor 
	//o igual que 5, y la palabra no aprobado en caso contrario. 
	
	Definir cal1, cal2, cal3, cal4, cal5 Como Real;
	Definir promedio Como Real;
	
	Leer cal1, cal2, cal3, cal4, cal5;
	
	promedio = (cal1 + cal2 + cal3 + cal4 + cal5) / 5;
	Escribir "Tu nota media es ", promedio; 
	
	Si promedio >= 5  Entonces
		Escribir "Aprobado";
	SiNo
		Escribir "Suspenso";
	FinSi
	
FinAlgoritmo
