var dulce1 = "Chocolatina"
var dulce2 = "BArrilete"

var lista = {
    tamano: 3,
    nodo_inicial: {
        valor: 1,
        siguiente_nodo: {
            valor: 2,
            siguiente_nodo: {
                valor: 3,
                siguiente_nodo: null
            }
        }
    }
}

const dulces = ["Chocolatina", "Barrilete", "Masmelo"];//Crear lista
console.log(dulces[1])//Acceder a elemento
dulces[2] = "Nucita"//Modificar elemento
console.log(dulces)

//agregar elementos a la lista
dulces.push("Gomitas")//Agregar al final
dulces.unshift("Masmelo")//Agregar al inicio
console.log(dulces)

//Eliminar
dulces.pop()//Eliminanos del final
console.log(dulces)
dulces.shift()//Eliminamos del inicio

dulces.splice(1,1, "Gomita", "Masmelo")//Eliminar en una posición específica

console.log(dulces)

console.log(dulces.length)//Saber el tamaño

console.log(dulces.toString())//Convertir el contenido en cadena
console.log(dulces.join(" - "))//Convertir el contenido en cadena con separador personalizado


console.log(dulces.indexOf("manzana"))//Conocer índice de un elemento
console.log(dulces.slice(0,2))//Sublistas
dulces.reverse()//invertir lista
console.log(dulces)
//ordenar
dulces.sort()
console.log(dulces)

var numeros = [5,6,8,9,1,0]
console.log(numeros)
numeros.sort((a,b) => a-b)
//si es positivo es porque el primer valor de estar después del segundo
//si es negativo es porque el primer valor de estar antes del segundo
//si es cero es porque son iguales
console.log(numeros)


//CONJUNTOS
var mi_conjunto = new Set();

//Agregar elementos
mi_conjunto.add("Martillo")
mi_conjunto.add("Tornillo")
mi_conjunto.add("Tornillo")
mi_conjunto.add("Llave xyz")

//Recorrer o leer el conjunto
mi_conjunto.forEach(herramienta => {
    console.log(herramienta)
})

//Eliminar un elemento
mi_conjunto.delete("Tornillo")

console.log(mi_conjunto)

console.log(mi_conjunto.size)

