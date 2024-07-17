
//Validar un correo electrónico:


const email = "usuario@dominio.com";
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(re.test(email)); // true
