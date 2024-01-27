'use strict';

var lenguajes = ["pascal", "PHP", "javaS", "c++"];

// La función de devolución de llamada recibirá varios valores: un valor o elemento,
// el índice (index) y el array (data).

// Sabemos que "elemento" es el elemento, "index" es el índice,
// y "data" es el array. No es necesario usar "data" ya que tenemos "lenguajes".

/*SI QUIERO SACAR EN QUE INDICE SE ENCUENTRA EL ELEMENTO. 
en docoment write pongo +index+ "-"      */

lenguajes.forEach((elemento, index) => {
    document.write("<li>" + index+ "-" +elemento + "</li>");
});

/*imprime 

0- pascal
1- PHP
2-javaS
3- c++
*/