Algoritmo Ejercicio_59_clase
	
	Definir n_centros, n_cursos, n_alumnos, centro, curso, alumno, suma, max_centro Como Entero;
	Definir notas, media, max Como Real;
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	Dimension notas[n_centros, n_cursos, n_alumnos];
	
	
	
	Para centro = 0 hasta n_centros - 1 Hacer
		EScribir "Centro ", centro;
		Para curso = 0 hasta n_cursos - 1 Hacer
			Escribir "Cursos ", curso, ": " Sin Saltar;
			
			suma = 0;
			
			
			Para alumno = 0 Hasta n_alumnos - 1 Hacer
				notas[centro, curso, alumno] = Aleatorio(1,10); //- (Aleatorio(0, 100)/ 100); Para que den decimales
				Escribir notas[centro, curso, alumno], " ", Sin Saltar;
				
				suma = suma + notas[centro, curso, alumno];
			FinPara
			
			media = suma / n_alumnos;
			Escribir "- Media del curso:", media Sin Saltar;
			
			Si (centro == 0 Y curso == 0) O media > max Entonces // para inicializarlo desdeel principio que es centro y curso 0
				max = media;
				max_centro = centro;
				
			FinSi
			
			
			Escribir"";
		FinPara
		Escribir "";
	FinPara
	
	Escribir "La media más alta es ", max, " del centro ", max_centro;
	
FinAlgoritmo
