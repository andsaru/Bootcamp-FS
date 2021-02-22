Algoritmo Ejercicio_13
	//Construir un diagrama de flujo tal que los datos de la base
	// y la altura del rectangulo calcule el perimetro y la superficie del mismo
	//Indicar los resultados para 
	//1. base=8.5 altura=6.2
	//2. base=7.9 altura=15.3
	//3. base=15.18 altura=22.0
	//4. base=39.4 altura=68.5
	Definir base, altura, superficie, perimetro Como Real;
	
	Escribir "La base del rectángulo es ";
	Leer base;
	
	Escribir "La altura del rectángulo es ";
	Leer altura;
	
	superficie = base*altura;
	perimetro = 2*(base+altura);
	
	Escribir "La superficie del rectangulo es ", superficie, " y su perimetro ", perimetro;
	
			
FinAlgoritmo

//	Otra forma con MIENTRAS 
//
//	Mientras base < 0 O ALTURA < 0 Hacer
//	Escribir ""datos incorrectos, introduzca de nuevo los datos.";
//	si base < o Entonces
//		Escribir "INtroduzca base";
//		Leer base;
//	FinSi
//	
//	Si altura < 0 Entonces
//		Escribir "Introduzca altura";
//		leer altura;
//	FinSi
//	FinMientras
//
//	superficie = base*altura;
//	perimetro = 2*(base+altura);
//
//	Escribir "La superficie del rectangulo es ", superficie, " y su perimetro ", perimetro;

//OTRA FORMA CON REPETIR
//
//	Escribir "Introduce la base";
//	Repetir
//		Leer base;
//		si base <= 0 Entonces
//			Escribir "La base debe ser mayor que 0, vuelve a introducirla";
//		FinSi
//	Hasta Que base > 0
//
//	Escribir "Introduce la altura";
//	Repetir
//		Leer altura;
//		si altura <= 0 Entonces
//			Escribir "La altura debe ser mayor que 0, vuelve a introducirla";
//		FinSi
//	Hasta Que altura > 0
//
//	superficie = base*altura;
//	perimetro = 2*(base+altura);
//
//	Escribir "La superficie del rectangulo es ", superficie, " y su perimetro ", perimetro;

	