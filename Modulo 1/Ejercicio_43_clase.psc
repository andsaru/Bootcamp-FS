Algoritmo sin_titulo
	//Reloj digital completo
	//Estructura horas:minutos:segundos
	//Usar ESperar y Limpiar pantalla.
	
	Definir horas, segs,  mins Como Entero;
	Definir horas_cero, mins_cero, segs_cero Como Caracter; //porque van a ser o 0 o la nada, se imprime como caracter
	
	segs = 58;
	mins = 59;
	horas = 22;
	
	Mientras verdadero Hacer
		Limpiar Pantalla;
		
		Si segs < 10 Entonces
			segs_cero = "0";
		SiNo
			segs_cero = "";
		FinSi
		Si mins < 10 Entonces
			mins_cero = "0";
		SiNo
			mins_cero = "";
		FinSi
		Si horas < 10 Entonces
			horas_cero = "0";
		SiNo
			horas_cero = "";
		FinSi
		
		Escribir horas_cero, horas, ":", mins_cero, mins, ":", segs_cero, segs;
		
		Esperar 1 Milisegundos;
		segs = segs + 1;
			
		Si segs > 59 Entonces
			segs = 0;
			mins = mins + 1;
		FinSi
		
		Si mins > 59  Entonces
			mins = 0;
			horas = horas + 1;
		FinSi
		
		Si horas > 23 Entonces
			horas = 0;
		FinSi
		
	FinMientras
	
	
FinAlgoritmo
