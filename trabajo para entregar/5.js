










//Extraer números de una cadena:

const text = "La casa cuesta 3000000 pesos";
const re = /\d+/g;
console.log(text.match(re)); // ["3000000"]
