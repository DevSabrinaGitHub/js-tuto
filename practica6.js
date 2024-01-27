'use strict'

/*Calculadora
ingresar dos numeros y realizar calculo entre ellos
es decir: si ingresamos 2 y 2, la suma sera 4, la resta 0, la division 1, la mult 4
si ingresamos algo mal que vuelva a pedir el nmr

*/

var n1 = parseInt(prompt("Ingrese un número"));
var n2 = parseInt(prompt("Ingrese otro número"));

while (isNaN(n1) || isNaN(n2)) {
    n1 = parseInt(prompt("Ingrese un número válido"));
    n2 = parseInt(prompt("Ingrese otro número válido"));
}

var suma = n1 + n2;
var resta = n1 - n2;
var division = n1 / n2;
var multiplicacion = n1 * n2;

var resultado = "La suma es: " + suma + "<br/>";
resultado += "La resta es: " + resta + "<br/>";
resultado += "La división es: " + division + "<br/>";
resultado += "La multiplicación es: " + multiplicacion + "<br/>";

document.write(resultado);

console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La división es: " + division);
console.log("La multiplicación es: " + multiplicacion);
