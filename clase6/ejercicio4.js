//findIndex

    //-Crear una función findIndex que acepte un array y un callback y que:
    //-por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    //-devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
    //-si ningún callback devuelve true, devuelva undefined






    function findIndex(array, callback) {
        for (let i = 0; i < array.length; i++) {
          const elemento = array[i];
          if (callback(elemento)) {
            return i;
          }
        }
        return -1;
      }
      



Ejemplo:

    const numeros = [8, 2, 3, 40, 33, 50]
    const multiploDe10 = x => x % 10 === 0
    find(numeros, multiploDe10) // 3

