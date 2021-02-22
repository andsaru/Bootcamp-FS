Algoritmo sin_titulo
	
	Definir lado, asterisco, espacio Como Entero;
	
	Leer lado;
	
	Para asterisco<-1 Hasta lado Con Paso 1
		Escribir "*" Sin Saltar;
	FinPara
	
	escribir " ";
	
	Para asterisco<-1 Hasta lado-2 Con Paso 1
		Escribir "*" Sin Saltar;
		Para espacio<-1 Hasta lado-2 Con Paso 1
			Escribir " " sin saltar;
		FinPara
		Escribir "*" Sin Saltar;
		escribir " ";
	FinPara
	
	Para asterisco<-1 Hasta lado Con Paso 1
		Escribir "*" Sin Saltar;
	FinPara
	
	Escribir "";
	
FinAlgoritmo
