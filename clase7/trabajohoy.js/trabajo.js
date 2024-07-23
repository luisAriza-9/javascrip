//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111



//Promise.race toma un iterable de promesas y devuelve una nueva promesa. La nueva promesa se resolverá con el valor de la primera promesa que se resuelva o rechace del iterable. Si todas las promesas se rechazan, la nueva promesa se rechazará con un error agregado que contiene las razones de todas las promesas rechazadas.


//**codigo prueba**



const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Promise 3 rejected")), 3000);
  });
  
  Promise.race([promise1, promise2, promise3])
    .then((result) => {
      console.log("Winning promise:", result); // Output: "Promise 1 resolved"
    })
    .catch((error) => {
      console.error("Error:", error.message); // Not reached in this case
    });
  
    //Explicacion:

    //Creación de Promesas:

//Se crean tres promesas: promesa1, promesa2 y promesa3.
//Cada promesa tiene una función de ejecución que simula una operación asincrónica.
//promesa1 se resuelve después de 1 segundo con el valor "Promesa 1 resuelta".
//promesa2 se resuelve después de 2 segundos con el valor "Promesa 2 resuelta".
//promesa3 se rechaza después de 3 segundos con un error "Promesa 3 rechazada".
//Uso de Promise.race:

//Se llama a Promise.race con un iterable que contiene las tres promesas.
//Promise.race devuelve una nueva promesa que se resolverá o rechazará en base al resultado de la primera promesa en el iterable que se resuelva (o rechace).
//Manejo del Resultado de la Promesa:

//La promesa devuelta se encadena con los métodos .then y .catch para manejar el resultado.
//El método .then se ejecuta si la promesa se resuelve.
//En este caso, el parámetro resultado contendrá el valor de la primera promesa en resolverse, que es "Promesa 1 resuelta".
//El método .catch se ejecuta si la promesa se rechaza.
//En este caso, el parámetro error contendrá el objeto de error de la primera promesa en rechazarse, que es "Promesa 3 rechazada". Sin embargo, en este ejemplo, la promesa se resuelve antes de que cualquier promesa se rechace, por lo que el bloque .catch no se ejecuta.
//Puntos Clave:

//Promise.race es útil cuando quieres conocer el resultado de la primera promesa en resolverse o rechazarse, independientemente del resultado de otras promesas en el iterable.
//Es particularmente útil en escenarios donde el tiempo es crítico y deseas proceder con el primer resultado disponible.
//El orden de las promesas en el iterable no importa, ya que la carrera está determinada por la primera promesa en resolverse.








//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222



//El Promise.all()método estático toma un iterable de promesas como entrada y devuelve un único Promise. Esta promesa devuelta se cumple cuando se cumplen todas las promesas de la entrada (incluso cuando se pasa un iterable vacío), con una matriz de los valores de cumplimiento. Rechaza cuando se rechaza alguna de las promesas de la entrada, con este primer motivo de rechazo.



//**codigo de ejemplo**//


function promptForDishChoice() {
    return new Promise((resolve, reject) => {
      const dialog = document.createElement("dialog");
      dialog.innerHTML = `
  <form method="dialog">
    <p>What would you like to eat?</p>
    <select>
      <option value="pizza">Pizza</option>
      <option value="pasta">Pasta</option>
      <option value="salad">Salad</option>
    </select>
    <menu>
      <li><button value="cancel">Cancel</button></li>
      <li><button type="submit" value="ok">OK</button></li>
    </menu>
  </form>
      `;
      dialog.addEventListener("close", () => {
        if (dialog.returnValue === "ok") {
          resolve(dialog.querySelector("select").value);
        } else {
          reject(new Error("User cancelled dialog"));
        }
      });
      document.body.appendChild(dialog);
      dialog.showModal();
    });
  }
  
  async function fetchPrices() {
    const response = await fetch("/prices");
    return await response.json();
  }
  



//Función promptForDishChoice:

//Esta función crea un diálogo modal que permite al usuario seleccionar un plato y devuelve una promesa. La promesa se resuelve con el plato seleccionado o se rechaza si el usuario cancela.

//Pasos detallados:

//Creación del diálogo modal:

//Se crea un elemento <dialog> utilizando document.createElement("dialog").
//Este elemento representa un diálogo modal que aparece sobre el contenido actual de la página, requiriendo la interacción del usuario antes de continuar.
//Definición del contenido del diálogo:

//Se establece la propiedad innerHTML con una cadena que contiene HTML para definir el formulario que se muestra dentro del diálogo:
//Un párrafo que pregunta "¿Qué le gustaría comer?".
//Un elemento <select> (desplegable) que ofrece opciones para "pizza", "pasta" y "ensalada".
//Un elemento <menu> con dos elementos <li> (elementos de lista) que contienen botones:
//Un botón "Cancelar" con un valor de "cancelar".
//Un botón "Aceptar" con el tipo establecido en "submit" (desencadena el envío del formulario) y un valor de "ok".
//Adición de un detector de eventos:

//Se agrega un detector de eventos "close" al diálogo utilizando addEventListener("close", ... ). Este detector se activa cuando el diálogo se cierra (se confirma o se cancela).

//Dentro del detector de eventos:
//Se verifica la propiedad dialog.returnValue. Esta propiedad indica el valor devuelto por el diálogo cuando se cierra.
//Si dialog.returnValue === "ok", el usuario hizo clic en "Aceptar". La promesa devuelta por esta función se resuelve con el valor del plato seleccionado. Este valor se obtiene utilizando dialog.querySelector("select").value. El método querySelector selecciona el primer elemento <select> dentro del diálogo, y su propiedad .value contiene la opción de plato elegida.
//Si dialog.returnValue no es "ok", el usuario canceló el diálogo (posiblemente haciendo clic en "Cancelar" o cerrando el diálogo de otra manera). La promesa se rechaza con un nuevo objeto Error que contiene el mensaje "El usuario canceló el diálogo".
//Inserción y visualización del diálogo:

//El elemento de diálogo creado se inserta en el cuerpo del documento utilizando document.body.appendChild(dialog).
//Se llama al método showModal() en el diálogo. Esto hace que el diálogo sea visible y evita la interacción con el contenido subyacente de la página hasta que el diálogo se cierre (comportamiento modal).
//Retorno de una promesa:

//Esta función devuelve una promesa. La promesa se resuelve con el valor del plato seleccionado cuando el usuario hace clic en "Aceptar", o se rechaza con un error si el usuario cancela.
//Función fetchPrices (suponiendo que se utiliza en otro lugar):

//Recuperación de precios de platos (asíncrono):

//Esta función se declara como async, lo que indica que utiliza operaciones asíncronas (espera solicitudes de red).
//Utiliza la función fetch para realizar una solicitud GET al punto final /prices en un servidor (probablemente para recuperar los precios de los platos). El objeto response esperado contendrá la respuesta del servidor.
//Análisis de la respuesta JSON (asíncrono):

//Se llama al método .json() en el objeto response (también esperado). Este método analiza los datos JSON de la respuesta en un objeto JavaScript que probablemente contiene los precios de los platos.
//Devolución de precios analizados:

//La función devuelve el objeto JSON analizado que contiene los precios de los platos.
//Flujo general:

//Es probable que se llame a la función promptForDishChoice para obtener la selección de plato del usuario.
//La promesa devuelta por promptForDishChoice se resuelve con el plato seleccionado o se rechaza si el usuario cancela.
//En la aplicación más grande, el valor del plato resuelto podría usarse (por ejemplo, pasarse como argumento a fetchPrices) para recuperar los precios //específicos del plato.
//La función fetchPrices recupera los precios de los platos del servidor de forma asíncrona y devuelve los datos de precios analizados.
//Notas adicionales:

//Este código asume que el servidor en /prices devuelve precios de platos en formato JSON.
//El manejo de errores para problemas de red o errores de análisis en fetchPrices no se muestra aquí. En una aplicación real, normalmente manejaría estos errores //potenciales.








//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333


//Promise.any toma un iterable de promesas y devuelve una nueva promesa. La nueva promesa se resolverá con el valor de la primera promesa en el iterable que se resuelva. Si todas las promesas se rechazan, la nueva promesa se rechazará con un error agregado que contiene las razones de todas las promesas rechazadas.



//**codigo ejemplo **//

const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa 1 resuelta"), 1000);
  });
  
  const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Promesa 2 rechazada")), 2000);
  });
  
  const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Promesa 3 rechazada")), 3000);
  });
  
  Promise.any([promesa1, promesa2, promesa3])
    .then((resultado) => {
      console.log("Promesa ganadora:", resultado); // Resultado: "Promesa 1 resuelta"
    })
    .catch((error) => {
      console.error("Error agregado:", error.message); // No se alcanza en este caso
    });
  

    //Creación de Promesas:

//Se crean tres promesas: promesa1, promesa2 y promesa3.
//Cada promesa tiene una función de ejecución que simula una operación asincrónica.
//promesa1 se resuelve después de 1 segundo con el valor "Promesa 1 resuelta".
//promesa2 se rechaza después de 2 segundos con un error "Promesa 2 rechazada".
//promesa3 se rechaza después de 3 segundos con un error "Promesa 3 rechazada".
//Uso de Promise.any:

//Se llama a Promise.any con un iterable que contiene las tres promesas.
//Promise.any devuelve una nueva promesa que se resolverá con el valor de la primera promesa en el iterable que se resuelva.
//Manejo del Resultado de la Promesa:

//La promesa devuelta se encadena con los métodos .then y .catch para manejar el resultado.
//El método .then se ejecuta si la promesa se resuelve.
//En este caso, el parámetro resultado contendrá el valor de la primera promesa en resolverse, que es "Promesa 1 resuelta".
//El método .catch se ejecuta si la promesa se rechaza.
//En este caso, el parámetro error contendrá un objeto de error agregado con los mensajes de todas las promesas rechazadas. Sin embargo, en este ejemplo, la promesa se resuelve antes de que cualquier promesa se rechace, por lo que el bloque .catch no se ejecuta.


//Puntos Clave:
//Promise.any es útil cuando quieres conocer el resultado de la primera promesa en resolverse, independientemente del resultado de otras promesas en el iterable.
//Es particularmente útil en escenarios donde deseas proceder con el primer resultado disponible, incluso si algunas otras promesas fallan.
//El orden de las promesas en el iterable no importa, ya que la carrera está determinada por la primera promesa en resolverse.


//Notas Adicionales:
//Si todas las promesas en el iterable se rechazan, Promise.any se rechazará con un objeto de error agregado que contiene los mensajes de todas las promesas rechazadas.
//Promise.any es similar a Promise.race en que devuelve una promesa que se resuelve o rechaza en base al resultado de la primera promesa en el iterable que se resuelve. Sin embargo, Promise.any solo se resuelve con el valor de la primera promesa en resolverse, mientras que Promise.race puede resolverse o rechazarse en base al resultado de cualquier promesa en el iterable.



//4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
//4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444


//El Promise.allSettled()método estático toma un iterable de promesas como entrada y devuelve un único Promise. Esta promesa devuelta se cumple cuando se cumplen todas las promesas de la entrada (incluso cuando se pasa un iterable vacío), con una matriz de objetos que describen el resultado de cada promesa.


//**codigo ejemplo**//


Promise.allSettled([
    Promise.resolve(33),
    new Promise((resolve) => setTimeout(() => resolve(66), 0)),
    99,
    Promise.reject(new Error("an error")),
  ]).then((values) => console.log(values));
  
  // [
  //   { status: 'fulfilled', value: 33 },
  //   { status: 'fulfilled', value: 66 },
  //   { status: 'fulfilled', value: 99 },
  //   { status: 'rejected', reason: Error: an error }
  // ]
  
// Expected output:
// "fulfilled"
// "rejected"




//Parámetros
//iterable
//Un iterable (como un Array) de promesas.

//Valor de retorno
//A Promiseque es:

//Ya cumplido , si el iterablepasado esta vacio.
//Cumplimiento asincrónico , cuando todas las promesas en el dado iterablese han cumplido (ya sea que se hayan cumplido o rechazado). El valor de cumplimiento es una matriz de objetos, cada uno de los cuales describe el resultado de una promesa en el iterable, en el orden en que se cumplieron las promesas, independientemente del orden de finalización. Cada objeto de resultado tiene las siguientes propiedades:
//status
//Una cadena, ya sea "fulfilled"o "rejected", que indica el estado final de la promesa.

//value
//Solo está presente si statuses "fulfilled". El valor con el que se cumplió la promesa.

//reason
//Solo está presente si statuses "rejected". El motivo por el cual se rechazó la promesa.

//Si el iterablevalor pasado no está vacío pero no contiene promesas pendientes, la promesa devuelta se cumple de forma asincrónica (en lugar de sincrónica).
//Descripción
//El Promise.allSettled()método es uno de los métodos de concurrencia de promesa . Promise.allSettled()Se utiliza normalmente cuando tienes varias tareas asincrónicas que no dependen unas de otras para completarse correctamente o cuando siempre quieres saber el resultado de cada promesa.

//En comparación, la Promesa devuelta por Promise.all()puede ser más apropiada si las tareas dependen unas de otras, o si desea rechazar inmediatamente si alguna de ellas rechaza.