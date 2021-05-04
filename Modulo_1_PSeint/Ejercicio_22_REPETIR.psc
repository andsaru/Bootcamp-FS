Algoritmo Ejercicio_22_Repetir
	
	Definir num Como Entero;
	
	num =1;
	
	Repetir 
		
		Si num MOD 2==0 Entonces
			Escribir "multiplo de dos ", num;
		SiNo
			si num MOD 3==0 Entonces
				Escribir "multiplo de tres ", num;
			FinSi
		FinSi
		
		num = num +1;
		
	Mientras Que num > 1 y num < 100
	
FinAlgoritmo
