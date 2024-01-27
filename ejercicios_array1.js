/* 
1- pedir 6 numeros enteros por pantalla, guardar en un array 
2- mostrar el contenido del mismo  
3- ordenar y mostrarlo 
4- invertir su orden y mostrarlo 
5- mostrar cuantos elementos tiene el array
6- buscar un valor introducido por el usuario, y que muestre si se encontro y su indice 
*/

'use strict';

var numeros = new Array(6);

// Pedimos al usuario que ingrese valores en el array
for (var i = 0; i < 6; i++) {
    numeros[i] = parseInt(prompt("Ingrese un número"));
}

// Función para mostrar el contenido del array
function mostrar(elementos) {
    document.write("<h3>Contenido del array</h3>");
    elementos.forEach((numero, index) => {
        document.write("<strong>" + numero + "</strong> <br/>");
    });
}

// Llamamos a la función para mostrar el array original
mostrar(numeros);

// Mostramos en la consola el array original
console.log("Array original:", numeros);

// Función para mostrar el array ordenado
function mostrar_array_ordenado(elementos) {
    document.write("<h3>Array ordenado</h3>");
    var arrayOrdenado = elementos.slice(); // Creamos una copia del array para no modificar el original
    arrayOrdenado.sort((a, b) => a - b);
    arrayOrdenado.forEach((numero) => {
        document.write(numero + "<br>");
    });
}

// Llamamos a la función para mostrar el array ordenado
mostrar_array_ordenado(numeros);

// Función para mostrar el array invertido
function mostrar_array_invertido(elementos) {
    document.write("<h3>Array invertido</h3>");
    var arrayInvertido = elementos.slice(); // Creamos una copia del array para no modificar el original
    arrayInvertido.reverse();
    arrayInvertido.forEach((numero) => {
        document.write(numero + "<br>");
    });
}

// Llamamos a la función para mostrar el array invertido
mostrar_array_invertido(numeros);

// Mostramos cuántos elementos tiene el array
document.write("<h3>Cantidad de elementos en el array: " + numeros.length + "</h3>");

// Buscar un valor introducido por el usuario y mostrar si se encontró y su índice
var valorBuscado = parseInt(prompt("Ingrese un valor para buscar en el array"));
var indiceEncontrado = numeros.indexOf(valorBuscado);

if (indiceEncontrado !== -1) {
    document.write("<p>El valor " + valorBuscado + " se encontró en el índice " + indiceEncontrado + " del array original.</p>");
} else {
    document.write("<p>El valor " + valorBuscado + " no se encontró en el array.</p>");
}
