Algoritmo Ejercicio_44
	//	Partir del ejercicio 2 y a�adir la siguiente funcionalidad:
	//	El usuario tendr� un men� num�rico en pantalla para poder elegir entre las operaciones a realizar.
	//	Si da una opci�n incorrecta (no existe), el programa avisar� al usuario y volver� a mostrar el men�.
	//	Har� esto hasta que el usuario elija la opci�n de salir del programa. Ejemplo de men� impreso por
	//	pantalla:
	//	Seleccione el n�mero de una de las siguientes opciones:
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
		Escribir "3: Multiplicaci�n ";
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
				Escribir "La suma de ", num1, " m�s ", num2, " es ", num1+num2;
			2:
				Escribir "La Resta de ", num1, " menos ", num2, " es ", num1-num2;
			3:
				Escribir "El producto de ", num1, " por ", num2, " es ", num1*num2;
			4:
				Escribir "La divisi�n de ", num1, " entre ", num2, " es ", num1/num2;
			5:
				Escribir "Salir del programa";
			De Otro Modo:
				Escribir "N�mero no valido, vuelva a intentarlo";
		Fin Segun
	MIentras que menu<>5
	
FinAlgoritmo
