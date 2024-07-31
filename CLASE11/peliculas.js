// Definimos una función asincrona llamada cargarPeliculas

const cargarPeliculas = async () => {

try {

// Usamos fetch para hacer una solicitud GET a la API de The Movie Database (TMDb)

// La URL incluye un endpoint específico para una película con el ID 500 y una clave API

const respuesta = await fetch('https://api.themoviedb.org/3/movie/500?api_key=66bb0deca6fdc22860dc8e63eaac4c87');

// Verificamos si la respuesta es exitosa (código de estado HTTP en el rango 200-299)

if (!respuesta.ok) {

// Si la respuesta no es exitosa, lanzamos un error con un mensaje descriptivo throw new Error('Network response was not ok ' + respuesta.statusText);

}

// Convertimos la respuesta a formato JSON

const datos = await respuesta.json();

// Imprimimos los datos en la consola para ver la información de la película console.log(datos);

} catch (error) {

// Capturamos y mostramos cualquier error que pueda ocurrir durante la solicitud o el procesamiento de los datos console.error('Hubo un problema con la solicitud Fetch:', error);

}

}

// Llamamos a la función cargarPeliculas para ejecutar la solicitud y procesar la respuesta cargar Peliculas();
