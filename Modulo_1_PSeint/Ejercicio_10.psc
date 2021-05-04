Algoritmo Ejemplo_10
	//Construir un diagrama de flujo que dado la categoría y sueldo de un trabajador calcule el aumento
	//de sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del
	//trabajador y su nuevo sueldo.
	
	Definir sueldo, categoria Como Entero;
	
	Escribir "Introduce tu sueldo ";
	Leer sueldo;
	
	EScribir "Introduce tu categoria ";
	Leer categoria;
	
	Si categoria == 1 Entonces
		Escribir sueldo * 1.15;
	FinSi
	
	Si categoria == 2 Entonces
		Escribir sueldo * 1.1;
	FinSi
	
	Si categoria == 3 Entonces
		Escribir sueldo * 1.06;
	FinSi
	
	Si categoria == 4 Entonces
		Escribir sueldo * 1.03;
	FinSi
	
	// Otra forma
	
	Si categoria == 1 Entonces
		Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.15;
	FinSi
	
	Si categoria == 2 Entonces
		Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.1;
	FinSi
	
	Si categoria == 3 Entonces
		Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.06;
	FinSi
	
	Si categoria == 4 Entonces
		Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.03;
	FinSi
	
	// la misma pero mas anidada
	
	Si categoria == 1 Entonces
		Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.15;
	SiNo
		Si categoria == 2 Entonces
			Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.1;
		SiNo
			Si categoria == 3 Entonces
				Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.06;
			SiNo
				Si categoria == 4 Entonces
					Escribir "Categoría ", categoria, " . Tu nuevo sueldo es: ", sueldo * 1.03;
				FinSi
				
			FinSi
		FinSi
		
		
	FinSi
	
FinAlgoritmo
