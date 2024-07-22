//1) map

//Crear una función map que acepte un array y un callback y que:

   // -por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
   // -obtenga el resultado
   // -lo pushee a un nuevo array
    //-devuelva el array final con el resultado de cada una de las llamadas al callback.

//Ejemplo:

  
     map = (numeros, multiplicar)=>{
let list =[]
numeros. forEach(numero=>{
    list.push(duplicar(numero))});

console.log(list);
     }
     
     
     const numeros = [1, 2, 3]
     const duplicar = x => x * 2
     map(numeros, duplicar) // [2, 4, 6]
 