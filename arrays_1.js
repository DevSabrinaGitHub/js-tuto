'use strict';

var alfabeto = ['a', 'b', 'c', 'd'];

//  crear un array también puedo hacerlo así:

var numeros = new Array(1, 2, 3, 4, 5);


console.log(alfabeto);
console.log(numeros);

//si quiero buscar un elemento, puedo por su indice 

console.log(numeros[2]);  //imprime 3


//devolver un elemento 
var texto = "Hola, cómo estás?";
var elem = parseInt(prompt("¿Qué elemento desea buscar? "));  //ingresa un 3
alert(texto[elem]);    //imprime a


//ver la longitud de un array
console.log(texto.length);
