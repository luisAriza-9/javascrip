function imprimeDatosDelAlumno(alumno) {
    console.log(alumno.nombre);
    console.log(alumno.edad);
    console.log(alumno.correo);
}
imprimeDatosDelAlumno(alumno);


//Para evitar la repetición de la variable alumno, podemos utilizar la nueva funcionalidad:

function imprimeDatosDelAlumno({nombre, edad, correo}) {
    console.log(nombre);
    console.log(edad);
    console.log(correo);
}
imprimeDatosDelAlumno(alumno)
