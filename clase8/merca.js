const recibirMercancía = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (mercancía.length === 0){
                reject(new Error("No Hay Datos"))
            }
            resolve(mercancía)
        }, 3000);
    })
}

const buscarProductoEspecifico = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (!(mercancía.includes(productoEspecifico))){
                reject(new Error("No Hay Producto"))
            }
            resolve("Si Hay de Ese Producto")
        }, 3000);
    })
}

async function hacerInventario(){
    try {
        const mercancíaRecibida = await recibirMercancía()
        alert(mercancíaRecibida)
        console.log(mercancíaRecibida)
    } catch (error) {
        alert(error)
        console.error(error)
    }
}

async function hayProductoEspecifico(){
    try {
        const hayProducto = await buscarProductoEspecifico()
        alert(hayProducto)
        console.log(hayProducto)
    } catch (error) {
        alert(error)
        console.error(error)
    }
}

async function buclePrincipal (){
    do {
        choice = prompt(menuInicialPrint);
        if (choice==1){
            await hacerInventario();
        } else if (choice==2){
            productoEspecifico = prompt("Que producto Especifico Quieres Revisar Si Hay") 
            await hayProductoEspecifico();
        } else if (choice==0){
            alert("Gracias Por Usar Nuestro Software")
        } else {alert("Opción No Valida")};
    } while(choice!=0);
};

const bienvenida = ("Bienvenido A Nuestro Software de Manejo de Mercancía")

const menuInicialPrint = ("Software de Mercancía \
1 Mostrar Toda La Mercancía \
2 Buscar Producto Especifico \
0 Para Salir")

alert("Bienvenido");
alert("Para empezar registre la mercancía en el siguiente formato");
let mercancíaEnBruto = prompt("Producto1,Producto2,Producto3");
let mercancía
if (mercancíaEnBruto == "" || mercancíaEnBruto === null){
    mercancía = []
} else {
    mercancía = mercancíaEnBruto.split(",")
}
console.log(mercancía)
let choice = 0
buclePrincipal()