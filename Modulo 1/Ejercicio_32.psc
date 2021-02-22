Algoritmo Ejercicio_32
	//El siguiente es el menú de un restaurante de bocadillos. 
	//Diseñar un algoritmo capaz de leer el
	//número de unidades consumidas de cada alimento ordenado 
	//y calcular la cuenta total. Vamos a
	//suponer que estos precios son fijos, es decir, que son constantes 
	
	Definir precio_bocadillo, precio_refresco, precio_cerveza, precio_pan Como Real;
	Definir bocadillos, refrescos, cervezas, pan Como Entero;
	
	precio_bocadillo = 1.5;
	precio_refresco = 1.05;
	precio_cerveza = 0.75;
	precio_pan = 2;
	
	Escribir "Cantidad de bocadillos vendidos";
	Leer bocadillos;
	Escribir "Cantidad de refrescos vendidos";
	Leer refrescos;
	Escribir "Cantidad de cerveza vendidos";
	Leer cervezas;
	Escribir "Cantidad de pan vendidos";
	Leer pan;
	
	Escribir "El total de todo lo vendido seria: ", (precio_bocadillo * bocadillos) + (precio_refresco * refrescos) +(precio_cerveza * cervezas) + (precio_pan * pan);
	
FinAlgoritmo
