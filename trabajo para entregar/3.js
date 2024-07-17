//Reemplazar todos los espacios en blanco por guiones:


const text = "Hola mundo";
const re = /\s+/g;
const newText = text.replace(re, "-");
console.log(newText); // "Hola-mundo"
