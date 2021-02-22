Algoritmo Ejercicio_40
	//Generar un array de 20 elementos con números aleatorios no repetidos entre sí.
	//Se va a tener que emplear un bucle for.
	//si ya existe tengo que generar otro aleatorio diferente, 
	//por lo tanto voy a tener que hacer otro bucle
	//otro bucle repetir, que compruebe si existe ese numero aleatorio
	//y el ultimo bucle que sera para 
	//aplicar el semaforo, elemento a elemento, como en el 39, usando el semaforo y
	//comprobando que sea diferente
	// solo un array el resto comprobaciones
	//primero genera un array con los 20 elementos y asi poco a poco
	
	Definir array_1, array_2, indice, num, tamano, c como entero;
	Definir repetido Como Logico;
	tamano = 5;
	Dimension array_1[tamano], array_2[tamano];

	
	Para indice = 0 hasta tamano - 1 Hacer
					
		Repetir
			num = 1 + Aleatorio(1,10);
			repetido = falso;
			Si indice >= 1 Entonces
				para c = 0 hasta indice - 1 con paso 1 Hacer
					si
				FinPara
			FinSi
		

		Hasta que repetido = falso

	FinPara
	
FinAlgoritmo
