'use strict';

var numeros =  [1, 2, 3, 4, 5]; // Usar corchetes para definir el array

// Solicitar al usuario un número menor que 6 para mostrar el elemento
/*
var elem = parseInt(prompt("¿Qué elemento desea buscar? "));

if (elem >= numeros.length) {
    alert("Ingrese un número menor a " + numeros.length);
} else {
    alert(numeros[elem]);
}

*/

//mostrar todos los elementos del array correspondiente

document.write('<h1>Elementos del array</h1>'); 
document.write('<ul>');

for (var i = 0; i < numeros.length; i++) {
    document.write('<li>' + numeros[i] + '</li>');
}

document.write('</ul>');
