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
	Definir salir_menu Como Logico;
	
	Escribir "Introduce operador uno";
	Leer num1;
	
	Escribir "Introduce operador dos";
	Leer num2;
	
	Escribir"";

	menu = 0;
	
	Repetir
		Escribir "1: Sumar "; 
		Escribir "2: Restar ";
		Escribir "3: Multiplicaci�n ";
		Escribir "4: Division ";
		Escribir "5: Salir del programa";
			
		Leer menu;
		Escribir"";
		
		salir_menu = Falso;
		Segun menu Hacer
			1: Escribir "suma ", num1 + num2;
				Escribir"";
			2: Escribir "resta ", num1 - num2;
				Escribir"";
			3: Escribir "multiplicacion ", num1 * num2;
				Escribir"";
			4: Escribir "division ", num1/num2;
				Escribir"";
			5: Escribir "salir ";
				Escribir"";
				salir_menu = Verdadero;
					
		De Otro Modo:
			Escribir "Vuelve a elegir alguna de las opciones";
			Escribir"";
					
		FinSegun
			
	Mientras Que salir_menu = Falso
			
FinAlgoritmo


//array_1[indice]= indice + 1;
//Si array_1[indice] = 1 Entonces
//	Escribir array_1[0], ": Sumar";
//Sino  
//	Si array_1[indice] = 2 Entonces
//		Escribir array_1[1], ": Restar";
//	Sino  
//		Si array_1[indice] = 3 Entonces
//			Escribir array_1[2], ": Multiplicar";
//		Sino  
//			Si array_1[indice] = 4 Entonces
//				Escribir array_1[3], ": Dividir";
//			Sino  
//				Si array_1[indice] = 5 Entonces
//					Escribir array_1[4], ": Salir del programa";
//				SiNo
//					Escribir "Opci�n incorrecta, intelo de nuevo";
//				FinSi
//			FinSi
//		FinSi
//	FinSi
//FinSi
