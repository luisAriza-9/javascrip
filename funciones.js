//Funciones declarativas
function suma(a, b) {
    return a + b;
  }
  
  console.log(suma(3, 5));
  
  //Funciones de expresión
  const suma2 = function (a, b) {
    return a + b;
  };
  
  console.log(suma2(5, 4));
  //Funciones de expresión tipo flecha
  const suma3 = (a, b) => a + b;
  const saludo = (saludo) => saludo + "!";
  
  console.log(suma3(6, 9));
  console.log(saludo("Hola"));
  
  //Funciones autoejecutables
  (function (a, b) {
    console.log(a - b);
  })(9, 3);