Algoritmo Ejercicio_15_while
	//Modifica el ej 6, de forma que si se teclea un cero, vuelva a pedir un numero por teclado
	//Dado un número entero A, hacer un diagrama de flujo que determine si es par, impar o nulo.
	
	Definir A Como Entero;
	
	Repetir
		Escribir "Escribe un numero diferente de 0 ";
		Leer A;
	Hasta Que A <> 0 // Si fuera Mientras que pondria A>0
	
	//Leer A;
	
	//Mientras A == 0 Hacer
	//	Escribir "Vuelve a escribir un numero";
	//	Leer A;
	//FinMientras
	
	
	
	Si A mod 2 == 0 Entonces //cuando dividimos entre dos el resto siempre va a ser 1 o 0
							//por eso compraramos a 0
		Escribir A, " es par";
	SiNo
		Escribir A, " es impar";
	FinSi
	
FinAlgoritmo
