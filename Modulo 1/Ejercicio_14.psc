Algoritmo Ejercicio_14
	//Calcula e imprime el precio que hay que cobrar al cliente
	//precio gasolina=1.333 E/L
	//1 galon=3.78541 litros 
	
	Definir gasolina, galon, precio Como Real;
	
	Escribir "Seleccione cantidad de gasolina ";
	Leer galon;
	
	gasolina = galon * 3.78541;
	precio = gasolina * 1.333;
	
	Escribir "El precio de la gasolina es ", precio " euros."; //precio se podria cambiar por galon * 3.78541 *1.333 directamente
	
FinAlgoritmo

