Algoritmo Ejercicio_49
//	Se tienen los costes de producci�n de tres departamentos (dulces, bebidas y conservas)
//correspondientes a los 12 meses del a�o anterior. Construir algoritmo que proporcione:
//		a) �En qu� mes se registr� el mayor coste de producci�n de dulces?
//		b) Promedio anual de los costes de producci�n de bebidas
//		c) �En qu� mes se registr� el mayor coste de producci�n en bebidas, y en qu� mes el menor
//		coste?
//		d) �Cu�l fue el que tuvo menor coste de producci�n en diciembre?
	
	Definir array_dulce, max_dulce, array_bebida, max_bebida, min_bebida, array_conserva, max_conserva, mes_maximo, mes_minimo, mes, contador, j, N_meses, tamano, suma Como Entero;
	N_meses = 12;
	Dimension array_dulce[N_meses], array_bebida[N_meses], array_conserva[N_meses];
	
	suma = 0;
	contador = 0;
	
	Escribir "DEPS     DULCE     BEBIDA   CONSERVAS";
	
	Para mes = 0 hasta N_meses - 1 Hacer
		array_dulce[mes] = Aleatorio (30,500);
		array_bebida[mes] = Aleatorio (30,500);
		array_conserva[mes] = Aleatorio (30,500);
		Escribir "MES ", mes+1,  "      ", array_dulce[mes], "       ", array_bebida[mes], "      ", array_conserva[mes];
	FinPara
	
	// A)
	Para mes = 0 hasta N_meses - 1 Hacer
		Si mes == 0 O array_dulce[mes] > max_dulce Entonces //Cuando sea  i == 0, es Enero, asi que no leeria la sig comparaci�n
			//Escribir "el numero  maximo es ", array_dulce[indice]; //Aqui visualizamos como se va guardando el maximo
			max_dulce = array_dulce[mes];
			mes_maximo = mes;
		FinSi	
	FinPara
	
	Escribir "";
	Escribir "a) El mes que se registro el mayor coste de producci�n de dulces es ", mes_maximo + 1, " con un total de ", max_dulce;
	
	// B)
	Para mes = 0 hasta N_meses - 1 Hacer
		suma = suma + array_bebida[mes];
	FinPara
	
	Escribir "";
	Escribir "b) El promedio anual de los costes de producci�n de bebidas ", suma/N_meses;
	
	// C)
	Para mes = 0 Hasta N_meses - 1 Hacer
		Si mes == 0 O array_bebida[mes] > max_bebida Entonces
			max_bebida = array_bebida[mes];
			mes_maximo = mes;
		FinSi
		
		Si mes == 0 O array_bebida[mes] < min_bebida Entonces
			min_bebida = array_bebida[mes];
			mes_minimo = mes;
		FinSi
	FinPara
	
	Escribir "";
	Escribir "c) El mes que se registro el mayor coste de producci�n de bebidas es el ", mes_maximo + 1, " con un total de ", max_bebida;
	Escribir "   El mes que se registro el menor coste de producci�n de bebidas es el ", mes_minimo + 1, " con un total de ", min_bebida;
	Escribir "";
	
	// D)
	
	Si array_dulce[11] < array_bebida[11] Y array_dulce[11] < array_conserva[11] Entonces
		Escribir "d) En Diciembre, el departamento de dulces ha tenido el menor coste.";
	SiNo
		Si array_bebida[11] < array_conserva[11] Entonces
			Escribir "d) En Diciembre, el departamento de bebidas ha tenido el menor coste.";
		SiNo
			Escribir "d) En Diciembre, el departamento de conservas ha tenido el menor coste.";
		FinSi
	FinSi

	
FinAlgoritmo
