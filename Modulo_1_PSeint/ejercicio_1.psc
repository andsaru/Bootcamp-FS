Algoritmo Ejercicio_1
	//Dadas dos variables num�ricas A y B, que el usuario debe teclear, 
	//se pide realizar un algoritmo que intercambie los valores de ambas variables 
	//y muestre cu�nto valen al final cada una de ellas (recuerda la asignaci�n).
	
	//DEfinimos las variables
	Definir A, B, C Como Entero;
	
	//Leemos las que necesitamos
	Leer A, B;
	
	//Guardamos A para no perder su valor
	C = A;
	//Soobreescribimos A con el valor de B
	A = B;
	//Ahora si, recuperamos el valor de A para asignarselo a B.
	B = C;
	
	//Escribimos los resultados intercambiados con un espacio.
	Escribir A," ", B 
	
	
FinAlgoritmo
