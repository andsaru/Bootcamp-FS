Algoritmo Ejercicio_34
	//a) Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
	//b) Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor
	//	o menor que la lectura.
	
	Definir num, val, contador Como Entero;
	
	val = Aleatorio(1,10);
	contador = 0;
	
	Repetir
		
		Escribir "Introduce numero";
		Leer num;

		Si val < num  Entonces
			Escribir "Es menor";
		SiNo
			Si val > num Entonces
				Escribir "Es mayor";
			FinSi
			
		FinSi
		
//		contador = contador + 1; //Para ponerle un limite de intentos, el acertaste tendria que ir dentro
//		Escribir contador;
//		Si contador = 10 Entonces
//			Escribir " limite alcanzado";
//		FinSi

	Mientras Que num <> val //Y contador<>10
	
	Escribir "¡acertaste! El numero aleatorio es: ", val;

FinAlgoritmo
