Algoritmo Ejercicio_8
	//Dado el sueldo de un trabajador, dibuja un diagrama de flujo que aplique un incremento de sueldo
	//del 15% si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.
	
	Definir sueldo Como Entero;
	
	Leer sueldo;
	
	Si sueldo < 1000 Entonces
		Escribir "tu sueldo cambia a ", sueldo + (sueldo * 15 / 100); // sueldo * 1.15. sueldo se puede
																//multiplicar * 1 y sumarlo a 0.15
	SiNo
		Escribir "ya cobras demasiado";
	FinSi
	
FinAlgoritmo
