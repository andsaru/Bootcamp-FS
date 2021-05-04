Algoritmo ejercicio_5
	//Construir un diagrama de flujo tal que con un número entero como entrada, 
	//determine e imprima si es positivo, negativo o nulo.
	
	Definir num1 Como Entero;
	
	Leer num1;
	
	Si num1 > 0 Entonces
		Escribir num1, " es positivo";
	SiNo
		si num1 == 0 Entonces
			Escribir num1, " es nulo";
		SiNo
			Escribir num1, " es negativo";
		FinSi
	FinSi
	
FinAlgoritmo
