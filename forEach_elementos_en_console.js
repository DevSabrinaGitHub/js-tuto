'use strict';

var lenguajes = ["pascal", "PHP", "javaS", "c++"];

// La función de devolución de llamada recibirá varios valores: un valor o elemento,
// el índice (index) y el array (arr).

// Sabemos que "elemento" es el elemento, "index" es el índice,
// y "arr" es el array.

/* si queremos mostrar en consola lo el array
solo debemos agregar otro valor en el each, en este caso sera arr, puede ser cualquier nombre
*/
lenguajes.forEach((elemento, index, arr) => {
    console.log(arr);
    document.write("<li>" + elemento + "</li>");
});

/* imprime 

(4)= [pascal, PHP, javaS, c++]
*/