Algoritmo Ejercicio_43
	//Reloj digital completo
	//Estructura horas:minutos:segundos
	//Usar ESperar y Limpiar pantalla.
	
	Definir seg, min, hora Como Entero;
	definir seg2, min2, hora2 Como Caracter;
	
	Limpiar Pantalla;
	
	
	Mientras Verdadero Hacer
		
	Para hora = 0  Hasta 23 Con Paso 1 Hacer
		
		Para min = 0 Hasta 59 Con Paso 1 Hacer
				
			Para seg = 0 Hasta 59 Con Paso 1 Hacer
				Si hora > 9 Entonces
					hora2 = "";
				SiNo
					hora2 = "0";
				FinSi
				
				Si min > 9 Entonces
					min2 = ":";
				SiNo
					min2 = ":0";
				FinSi
				
				Si seg > 9 Entonces
					seg2 = ":";
				SiNo
					seg2 = ":0";
				FinSi
				
				
				Escribir hora2,hora, min2, min, seg2, seg;
				
				Esperar 1 Milisegundos;
				Limpiar Pantalla;
			FinPara
			
		FinPara

	Fin Para
	
	Fin Mientras




	
FinAlgoritmo


//BUCLE INFINITO, COMO HACER
//Mientras Verdadero
//
//FinMientras
