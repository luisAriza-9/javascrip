//XMLHttpRequest
/*
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = function(){
    if(xhr.status === 200){
        const response = JSON.parse(xhr.responseText)
        // console.log(response)
        response.forEach(element => {
            if(element.price < 110){
                console.log(element)
            }
        });
    }else{
        console.log("Error: "+ xhr.statusText)
    }
}

xhr.send();
*/

//Fetch
const cabeceras = new Headers();
cabeceras.set("Content-Type","application/json");
const opciones = {
  method: "GET",
  headers: cabeceras,
  // body: JSON.stringify(datos)
};
const url = "https://fakestoreapi.com/products";

// fetch(url, opciones)
//   .then((respuesta) => {
//     if (respuesta.ok) {
//       return respuesta.json();
//     }
//   })
//   .then((datos) => {
//     console.log(datos);
//   })
//   .catch((err)=>{
//     console.error(err)
//   });


//async / await
const peticion = async (url, opciones) => {
    const respuesta = await fetch(url, opciones);
    if(respuesta.ok){
        const datos = await respuesta.json()
        return datos
    }else{
        return []
    }
}

async function ejecutarPeticion(url, opciones){
    const resultadoObtenido = await peticion(url, opciones)
    console.log(resultadoObtenido)
}

ejecutarPeticion(url, opciones)