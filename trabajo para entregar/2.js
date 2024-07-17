//Encontrar todas las palabras en una cadena:

const text = "Hola, ¿cómo estás?";
const re = /\b\w+\b/g;
console.log(text.match(re)); // ["Hola", "cómo", "estás"]


