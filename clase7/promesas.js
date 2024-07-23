// const promesaEjemplo = new Promise((resolve, reject) => {
//     var edad = 15;
//     if(edad > 18){
//         resolve("Puede entrar");
//     }else{
//         reject("No puede entrar")
//     }
// })

// promesaEjemplo.then(resolve => {
//     console.log(resolve);
// })
// .then(function(){
//     console.log("Terminé")
// })
// .catch(reject => {
//     console.error(reject)
// })
// .finally(function(){
//     console.log("Fin fin")
// })

function saludar(nombre) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Saludar " + nombre);
        resolve(nombre);
      }, 1000);
    });
  }
  
  function hablar(nombre) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Bla Bla Bla " + nombre);
        resolve(nombre);
      }, 2000);
    });
  }
  
  function despedir(nombre) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Adios " + nombre);
        resolve();
      }, 1000);
    });
  }
  
  console.log("Inicia el proceso");
  saludar("Laura")
    .then(hablar)
    .then(hablar)
    .then(despedir)
    .then(function () {
      console.log("Fin del proceso"+nombre);
    });