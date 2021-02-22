Algoritmo Ejercicio_20
	//Ejercicio 20 con variacion a la hora de mostrar los numeros de intentos
	
	
	Definir clave Como Caracter;
	Definir contador, intentos_maximo Como Entero;
	
	contador = 0;
	intentos_maximo = 3;
	
	Repetir
		
		Escribir "Introduce la clave. Dispone de " intentos_maximo - contador " intentos";
		Leer clave;
		contador =contador+1;
		
	Hasta Que contador == intentos_maximo o clave == "eureka"
	
	Si clave == "eureka" Entonces
		EScribir "correcto";
	SiNo
		Escribir "bloqueado";
	FinSi
	
FinAlgoritmo
