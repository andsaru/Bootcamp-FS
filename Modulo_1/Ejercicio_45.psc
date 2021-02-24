Algoritmo Ejercicio_45
	
//	Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud,
//	aquellos que sean pares y mayores que 25.
//	Después, mostrar el vector de origen completo y el de destino solo los números introducidos.
	
	Definir array1, array2, indice, tamano, indice_array_dos Como Entero;
	tamano = 10;
	Dimension array1[tamano], array2[tamano];
	
	indice_array_dos = 0;
	
	Para indice = 0 hasta tamano -1 Hacer
		
		// Rellenamos el primer array e Imprimir 
		array1[indice] = azar(50);
		Escribir array1[indice], " " Sin Saltar;
		

		// Rellenar el segundo array 
		si array1[indice] mod 2 == 0 Y array1[indice]> 25 Entonces
			array2[indice_array_dos] = array1[indice];
			indice_array_dos = indice_array_dos + 1;

		FinSi
	FinPara
	
	Escribir " ";
	
	Si indice_array_dos < 1 Entonces
		Escribir "El segundo array esta vacio";
	SiNo
		
		Para indice = 0 hasta indice_array_dos - 1  hacer
			Escribir array2[indice], " " Sin Saltar;
		FinPara
		
		Escribir " ";
	
	FinSi

	

	
	
	
FinAlgoritmo
