Algoritmo Ejercicio_12
	//Construir diagrama de flujo que te permita calcular la temperatura teniendo en cuenta
	//el numero de sonidos emitidos por un grillo en un minuto
	//es una funcion que depende de la temperatura.
	//Determina el nivel de temperatura haciendo uso de un grillo como termometro
	
	Definir temperatura, N Como Real; //Tambien podria ser un Entero pero como hay una division mejor poner real
	
	EScribir "El numero de sonidos emitidos por un grillo es ";
	Leer N;
	
	temperatura = N/4 + 40;
	
	Si N == 0 Entonces //o N <= 0
		Escribir "error";
	SiNo
		Escribir "La temperatura del grillo es ", temperatura, " ºc.";
	FinSi
	
	
FinAlgoritmo
