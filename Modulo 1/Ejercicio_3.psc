Algoritmo Ejercicio_3
	// a)Algoritmo que lea dos números y nos diga cuál de ellos es mayor 
	// o si son iguales (recuerda usar la estructura condicional SI).
	// b)Ahora con 3 números diferentes.
	Definir num1,num2,num3 Como Entero;
	Leer num1,num2,num3;
	// a)
	// Si num1 == num2  Entonces
	// Escribir num1 " y " num2 , " son iguales "
	// SiNo
	// si num1 > num2 Entonces
	// Escribir num1, " es mayor que ", num2
	// SiNo
	// Escribir num1, " es menor que ", num2
	// FinSi
	// FinSi
	// b)
	Si num1>num2 Y num1>num3 Entonces
		Escribir num1,' es el mayor ';
	SiNo
		Si num2>num3 Y num2>num1 Entonces
			Escribir num2,' es el mayor ';
		SiNo
			Si num3>num1 Y num3>num2 Entonces
				Escribir num3,' es el mayor';
			SiNo
				Escribir ' son iguales';
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
