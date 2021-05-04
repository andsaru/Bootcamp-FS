Funcion resultado <- sumar (sumando1, sumando2)
	
	Definir resultado Como Entero;
	resultado = sumando1 + sumando2;
	
FinFuncion

Funcion resultado <- restar (restando1, restando2)
	
	Definir resultado Como Entero;
	resultado = restando1 - restando2;
	
FinFuncion


Algoritmo Ejemplo_Funciones
	Definir resultado_suma, resultado_resta Como Entero;
	
//	Escribir sumar(15,16);
//	Escribir restar(1,1);
	
	resultado_suma = sumar(15,16); //31
	resultado_resta = restar (resultado_suma, 1);
	Escribir resultado_resta;
	
	Escribir restar(resultado_suma,1); //Otra forma
	
	Escribir restar(sumar(15,16),1); //Todo a la vez
	
FinAlgoritmo
