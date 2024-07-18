var carro = {
    marca: "Mazda",
    referencia: "3",
    modelo: 2000,
    partes: ["puertas","llantas","espejos"],
    frenos: {
        tipo: "ABS",
        costo: 2315
    },
    encender: function(){
        console.log("Encendiendo motores....")
    }
}

console.log(carro.referencia)