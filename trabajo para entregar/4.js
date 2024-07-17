//Validar un número de teléfono:


const phone = "123-456-7890";
const re = /^\d{3}-\d{3}-\d{4}$/;
console.log(re.test(phone)); // true
