//2.6 DOM sEThtml

function setHTML(element, html) {
    // Se verifica  si el elemento existe y si la propiedad setHTML está definida
    if (element && element.setHTML) {
      element.setHTML(html);
    } else {
      element.innerHTML = html;
    }
  }
  


  //pruebeba
  
  // Suponiendo que tenemos un elemento con el id "miElemento"
const prueba = document.getElementById('miElemento');

// Nuevo contenido HTML
const nuevoContenido = '<h1>Hola, mundo!</h1>';

// Llamamos a la función para establecer el nuevo contenido
setHTML(prueba, nuevoContenido);
