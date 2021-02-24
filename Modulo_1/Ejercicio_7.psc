Algoritmo Ejercicio_7
	//Construir un diagrama de flujo que dado el coste de un artículo vendido y la cantidad de dinero
	//entregado, calcule e imprima el cambio que se debe entregar al cliente.
	
	Definir vuelta, entregado, precio Como Entero;
	
	Leer entregado, precio;
	
	vuelta = entregado - precio;
	
	Si entregado >= precio Entonces
		Escribir "tu vuelta es de ", vuelta;
	SiNo
		Escribir "Te falta dinero";
	FinSi
	
FinAlgoritmo
