Algoritmo Ejercicio_37
//	Una calculadora de la letra de un DNI, pediremos el DNI por teclado y nos devolverá el DNI
//	completo con la letra. Para calcular la letra, cogeremos el resto de el DNI entre 23, que será un
//	número entre 0 y 22. Utilizar el resultado para buscar en un array de caracteres la posición que
//	corresponda a la letra
	
	Definir tamano, dni, indice Como Entero;
	Definir letras_DNI Como Caracter;
	tamano = 23;
	Dimension letras_DNI[tamano];
	
	letras_DNI[0] = "T";
	letras_DNI[1] = "R";
	letras_DNI[2] = "W";
	letras_DNI[3] = "A";
	letras_DNI[4] = "G";
	letras_DNI[5] = "M";
	letras_DNI[6] = "Y";
	letras_DNI[7] = "F";
	letras_DNI[8] = "P";
	letras_DNI[9] = "D";
	letras_DNI[10] = "X";
	letras_DNI[11] = "B";
	letras_DNI[12] = "N";
	letras_DNI[13] = "J";
	letras_DNI[14] = "Z";
	letras_DNI[15] = "S";
	letras_DNI[16] = "Q";
	letras_DNI[17] = "V";
	letras_DNI[18] = "H";
	letras_DNI[19] = "L";
	letras_DNI[20] = "C";
	letras_DNI[21] = "K";
	letras_DNI[22] = "E";
	
	Escribir "Introduce tu DNI:";
	Leer dni;
	
	Escribir "Tu dni completo es", dni, letras_DNI[dni mod tamano];
	
	//Con el bucle, saldria lo mismo
	
//	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
//		si dni mod tamano == indice Entonces
//			Escribir "Tu dni completo es", dni, letras_DNI[indice];
//		FinSi
//	FinPara
	
	
FinAlgoritmo
