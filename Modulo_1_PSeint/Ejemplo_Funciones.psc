
Funcion saludar_desconocido()
	Escribir "Hola desconocido";
FinFuncion

Funcion saludar (nombre, apellido, dia)
	Escribir "Hola ", nombre, " ", apellido;
	
	Si Minusculas(dia) == "viernes" Entonces
		Escribir "Ya es viernes, ¡Buen finde!";
	SiNo
		Escribir "¡A seguir con la semana!";
	FinSi
	
	saludar_desconocido();
FinFuncion


Algoritmo ejemplo_funciones_saludar
	
	Definir mi_nombre, mi_apellido, mi_dia Como Caracter; //el algoritmo sin funcion
	
	mi_nombre = "Peter";
	mi_apellido = "Parker";
	mi_dia = "jueves";
	
	saludar_desconocido();
	
	saludar("Juan", "", ""); 
	saludar("Vero", "Perez", "sabado");
	saludar("Pepe", "Martin", "Viernes");
	saludar("Peter", mi_apellido, mi_dia);
FinAlgoritmo

