// Obtenemos los elementos del DOM
const miCampo = document.getElementById('miCampo');
const miBoton = document.getElementById('miBoton');

// Agregamos un event listener al botón
miBoton.addEventListener('click', () => {
    // Obtenemos el valor del campo de texto
    const valor = miCampo.value;

    // Mostramos el valor en la consola
    console.log(valor);
});
