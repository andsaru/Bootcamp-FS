Algoritmo sin_titulo
	
	Definir num Como Entero;
	
	Para num=1 Hasta 100 Con Paso 1
		//asi indicamos si un numero es multiplo de 3 o de 2
		si num MOD 2==0 Entonces
			Escribir "multiplo de dos ", num;
		SiNo
			si num MOD 3==0 Entonces
				Escribir "multiplo de tres ", num;
			FinSi
		FinSi
	FinPara
	
FinAlgoritmo
