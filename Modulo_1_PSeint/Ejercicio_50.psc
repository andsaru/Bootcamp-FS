Algoritmo Ejercicio_50
//	Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
//	introduciremos por teclado
//	Utilizar subcadena() y longitud()
	
	Definir letra, frase Como Caracter;
	DEfinir indice, contador como Entero;
	
	contador = 0;
	
	EScribir "Introduce una frase";
	Leer frase;
	
	Escribir "Introduce una letra";
	Leer letra;
	
	Para indice = 0 hasta longitud(frase) -1 con paso 1 Hacer
		
		Si subcadena(frase, indice, indice) == letra Entonces
			contador = contador + 1;
		FinSi
	FinPara
	
	EScribir "La letra ", letra, " aparece ", contador, " veces.";
	Escribir "";
	
	
	// Con la funcion Mayuscula te imprimira todas las letras, tanto Minusculas, como Mayusculas.  
	// Te convierte todas la letras a Mayus.
	Para indice = 0 hasta longitud(frase) -1 con paso 1 Hacer
		
		Si Mayusculas(subcadena(frase, indice, indice)) == Mayusculas(letra) Entonces
			contador = contador + 1;
		FinSi
	FinPara
	
	EScribir "La letra ", letra, " aparece ", contador, " veces.";
	
	// Lo mismo pero lo convierte en mayusculas
	Para indice = 0 hasta longitud(frase) -1 con paso 1 Hacer
		
		Si Minusculas(subcadena(frase, indice, indice)) == Minusculas(letra) Entonces
			contador = contador + 1;
		FinSi
	FinPara
	
	Escribir "La letra ", letra, " aparece ", contador, " veces.";
	

	
FinAlgoritmo
