Algoritmo Ejercicio_10_con_segun
	
	Definir sueldo, categoria Como Entero;
	
	Escribir "Introduce tu sueldo ";
	Leer sueldo;
	
	Escribir "Introduce tu categoria ";
	Leer categoria;
	
	// Escribir Categor�a , categoria, . Tu nuevo sueldo es: , Sin Saltar;
	// Sirve para ahorrarse todas las lineas Escribir Categor�a , categoria,  . 
	// Tu nuevo sueldo es: , dejando solo sueldo*loquesea
	
	
	//Con Mientras 
	//Mientras categoria>4 o categoria<1 Hacer
	//	Escribir "Error categoria, indicar de nuevo";
	//	Leer categoria;
	//FinMientras
	
	Segun categoria Hacer
		1:
			Escribir "Categor�a ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.15;
		2:
			Escribir "Categor�a ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.10;
		3:
			Escribir "Categor�a ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.06;
		4:
			Escribir "Categor�a ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.03;
		De Otro Modo:
			Escribir "Categoria no valida.";
			
	FinSegun
	
	
	
	
	
FinAlgoritmo
