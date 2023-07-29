/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   if (nombre.length === 0) {
      return nombre; // Devuelve el mismo nombre si está vacío.
    } else {
      return nombre.charAt(0).toUpperCase() + nombre.slice(1);
      // Obtiene la primera letra con toUpperCase() y concatena el resto del nombre con slice(1).
    }

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   
   return cb();
   
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1, num2);

}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   // Utilizamos el método reduce para sumar los elementos del arreglo 0 el es valor inicial del acumulador
   const suma = arrayOfNumbers.reduce((acumulador, numero) => acumulador + numero, 0);

   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:

   for (let i = 0; i < array.length; i++) {
      cb(array[i]);
    }

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   const elementosCb = [];
   for (let i = 0; i < array.length; i++) {
      const elemento = cb(array[i]);
      elementosCb.push(elemento);
    }

   return elementosCb;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   //const elementosConA = arr.filter(elemento => elemento.startsWith('a') || elemento.startsWith('A'));
  //return elementosConA;


   const elementosConA = [];
   for (let i = 0; i < arrayOfStrings.length; i++) {
     const elemento = arrayOfStrings[i];
     if (elemento.startsWith('a')){
       elementosConA.push(elemento);
     }
   }
   return elementosConA;
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
