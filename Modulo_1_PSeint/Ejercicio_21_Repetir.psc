Algoritmo Ejercicio_21_Repetir
	
	//Algoritmo que lea n�meros enteros hasta teclear 0, 
	//y nos muestre el m�ximo, el m�nimo y la media
	//de todos ellos. Piensa como debemos inicializar las variables.
		
	Definir num, max, min, contador, suma Como Entero;
		
	Escribir "Introduce numero";
	Leer num;
		
	contador = 0; 
	suma = 0;
	
	Repetir
		
		Escribir "Introduce numero";
		Leer num;
		
		Si num <> 0 Entonces
			
			Si contador == 0 O num > max Entonces
				max = num;
			FinSi
			
			Si contador  == 0 O num < min Entonces
				min = num;				
			FinSi
			
		
		
		//media
			contador = contador + 1;
			suma = suma + num;
		FinSi
		
		
	Mientras Que num <> 0
	
	Si contador == 0 Entonces // deberia dar error al inicializar, pero continua
		Escribir "No has introducido ningun numero";
	SiNo
		Escribir "la media es " suma/contador;
		Escribir "El maximo es " max;
		Escribir "El minimo es " min;
	FinSi
	
	
	
FinAlgoritmo
