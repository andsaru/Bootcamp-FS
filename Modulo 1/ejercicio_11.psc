Algoritmo Ejercicio_11
	//En una tienda efectúan un descuento a los clientes 	
	//dependiendo de la cantidad de la compra. El descuento se basa en:
			
	Definir precio, descuento Como Entero;
	
	Leer precio;
	
	Si precio < 500 Entonces
		EScribir "No hay descuento";
	SiNo
		si precio<=1000 Entonces
			Escribir "precio final, con 5% descuento ", precio * 0.95;
		SiNo
				
			si precio<=7000 Entonces
				Escribir "precio final, con 10% descuento  ", precio * 0.9;
			SiNo
				si precio<=15000 Entonces
					Escribir "precio final, con 20% descuento  ", precio * 0.8;
				SiNo
					//si precio>15000 Entonces. Ya no hace falta ponerlo, seria la unica condicion que queda
						Escribir "precio final, con 25% descuento  ", precio * 0.75;
				FinSi
					
			FinSi
			
			
		FinSi
	
	FinSi
	
FinAlgoritmo
