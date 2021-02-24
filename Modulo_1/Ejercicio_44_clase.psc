Algoritmo Ejercicio_44
	//	Partir del ejercicio 2 y añadir la siguiente funcionalidad:
	//	El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar.
	//	Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú.
	//	Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por
	//	pantalla:
	//	Seleccione el número de una de las siguientes opciones:
	//		1: Sumar
	//		2: Restar
	//		3: Multiplicar
	//		4: Dividir
	//		5: Salir del programa.	

	
	Definir indice, tamano, menu, num1, num2 Como Entero;

	Repetir
		//Primero mostramos el menu por pantalla
		Escribir "1: Sumar "; 
		Escribir "2: Restar ";
		Escribir "3: Multiplicación ";
		Escribir "4: Division ";
		Escribir "5: Salir del programa";
		Escribir "Selecciona opcion menu";
		Leer menu;
		
		Si menu <> 5 Entonces // Para que el programa tenga mas sentido y solo pida los operadores cuando la opcion no sea salir
			Escribir "Introduce dos operadores";
			Leer num1, num2 ;
		FinSi
	
		Limpiar pantalla; //para ir limpiando pantalla con cada seleccion de menu
	 
		Segun menu Hacer
			1:
				Escribir "La suma de ", num1, " más ", num2, " es ", num1+num2;
			2:
				Escribir "La Resta de ", num1, " menos ", num2, " es ", num1-num2;
			3:
				Escribir "El producto de ", num1, " por ", num2, " es ", num1*num2;
			4:
				Escribir "La división de ", num1, " entre ", num2, " es ", num1/num2;
			5:
				Escribir "Salir del programa";
			De Otro Modo:
				Escribir "Número no valido, vuelva a intentarlo";
		Fin Segun
	MIentras que menu<>5
	
FinAlgoritmo
