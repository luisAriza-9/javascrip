//Estructuras repetitivas controladas por una cantidad

//for clásico
for(let i = 0; i < 11; i++){ //Equivalente a | for i in range(11):
    console.log(i)
}

//recorrer lista
var frutas = ["Manzana", "Uva", "Banano"];
for(let fruta of frutas){ // Equivalente a | for fruta in frutas: <-- Python
    console.log(fruta)
}

//Estructuras repetitivas controladas por una condición
console.log("While - mientras")
var i = 1;
while(i <= 10){
    if(i === 6){
        break;
    }
    console.log(i++)
    
}

console.log("While - hasta")
var j = 0;
do{
    console.log(j++)
}while(j <= 10);

console.log("forEach")
var animales = ["Leon", "Perro", "Gato"]

var animales_mayuscula = animales.map(function(animal){
    return animal.toUpperCase();
})

animales_mayuscula.forEach(function(animal){
    console.log(animal)
})