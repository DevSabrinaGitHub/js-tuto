'use strict';

var lenguajes = ["pascal", "PHP", "javaS", "c++"];

// La función de devolución de llamada recibirá varios valores: un valor o elemento,
// el índice (index) y el array (data).

// Sabemos que "elemento" es el elemento, "index" es el índice,
// y "data" es el array. No es necesario usar "data" ya que tenemos "lenguajes".
lenguajes.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>");
});
