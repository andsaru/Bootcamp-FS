Algoritmo Ejercicio_39_resueltopormi
//	Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. Con
//	que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir al final del
//	algoritmo el resultado.
	
	Definir array_1, array_2, indice, tamano Como Entero;
	tamano = 10;
	Dimension array_1[tamano], array_2[tamano];
	
	Para indice = 0 hasta tamano - 1 con paso 1 Hacer
		array_1[indice] = Aleatorio(1,10);
		array_2[indice] = Aleatorio(1,10);
		Si array_1[indice] == array_2[indice] Entonces
			Escribir "El array_1[", indice, "] contiene el valor ",array_1[indice] Sin Saltar;
			Escribir " y el array_2[", indice, "] contiene el valor ",array_2[indice];
			Escribir "Los dos arrays son iguales";
		SiNo
			
			Escribir "Son diferentes";
		FinSi
	FinPara
	
	
FinAlgoritmo
