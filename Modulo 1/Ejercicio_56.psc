Algoritmo Ejercicio_56
	
//	Leer y guardar en una matriz las notas de los alumnos de un colegio 
//	en función del número de cursos (filas) y del número de alumnos 
//	por curso (columnas). El máximo de alumnos será 5 
//	para cada uno de tres cursos.
	
	
	Definir notas, curso, alumno, n_cursos, n_alumnos Como Entero;
	n_cursos = 3;
	n_alumnos = 5;
	Dimension notas[n_cursos, n_alumnos];
	
	//Leemos y guardamos las notas
	Para curso = 0 hasta n_cursos - 1 Hacer
		Para alumno = 0 hasta n_alumnos - 1 Hacer
			Escribir "Introduce la nota del alumno ", alumno, " del curso ", curso;
			Leer notas[curso, alumno];
		FinPara
	FinPara
	
	Para curso = 0 hasta n_cursos - 1 Hacer
		Escribir "Curso ", curso, " : " sin saltar;
		Para alumno = 0 hasta n_alumnos - 1 Hacer
			Escribir notas[curso, alumno], " "Sin Saltar;
		FinPara
		Escribir "";
	FinPara
	
	
	
FinAlgoritmo
