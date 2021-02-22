Algoritmo Ejercicio_14_otra_forma
	
	Definir cantidad_galones, cantidad_litros, litros_por_galon, precio_por_litro, precio_final Como Real;
	
	litros_por_galon = 3.78541;
	precio_por_litro = 1.333;
	
	Escribir "Introduce la cantidad de galones surtidos.";
	Leer cantidad_galones;
	
	cantidad_litros = cantidad_galones * litros_por_galon;
	precio_final = cantidad_litros * precio_por_litro;
	
	Escribir "El precio final es ", precio_final, " euros.";
	
FinAlgoritmo
