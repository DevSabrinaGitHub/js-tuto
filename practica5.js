'use strict'

/* Hacer una tabla de multiplicar de un número introducido por teclado */

document.write("<h1>Tabla de multiplicar</h1>");
var n = parseInt(prompt("Ingrese un número"));

for (var i = 1; i <= 10; i++) {
    document.write(i + " x " + n + " = " + (i * n) + "<br/>");
}

document.write("<h1>Todas las tablas de multiplicar</h1>");

for (var c = 1; c <= 10; c++) {
    document.write("<h2>Tabla de " + c + "</h2>");
    for (var i = 1; i <= 10; i++) {
        document.write(i + " x " + c + " = " + (i * c) + "<br/>");
    }
}
