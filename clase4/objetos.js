var camper = {
    nombre: "Luis Nicolas",
    edad: 35,
    grupo: "U3",
    mejor_amigo: {
        nombre: "David Leonardo",
        edad: 20
    }
}

// function conocer_edad({edad}){
//     console.log(edad)
// }

// conocer_edad(camper)

var silla = {
    altura: 150,
    color:"Rojo",
    material: "Madera"
}

//operador spread (...)
//para desestructurar propiedades faltantes
const {material, altura, ...otros} = silla
console.log(material)
console.log(altura)
console.log(otros)

//para añadir otras propiedades
var silla2 = {...silla, numeroPatas: 4}
console.log(silla2)


//concatenar
var objeto_concatenado = {...silla, ...camper}
console.log(objeto_concatenado)

//clonar un objeto
var gorra = {
    marca: "Gef",
    color: "Negro"
}

var gorra2 = {...gorra}

gorra2.talla = "L"

console.log(gorra)
console.log(gorra2)

//Conversión de JSON a cadena
function ejemploReplacer(key, value){
    if(key === "marca"){
        return value + ":)"
    }else{
        return value
    }
}
var gorra3 = JSON.stringify(gorra, ejemploReplacer)
console.log(gorra3)

