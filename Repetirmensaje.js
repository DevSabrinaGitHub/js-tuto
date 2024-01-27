'use strict'
var num1;
var num2;



//ejercicios : si lo ingresado no es un numero o si es menor o igual a cero, que vuelva a pedir

//se utiliza isNaN

while( num1<= 0 || num2<= 0 ||isNaN(num1)){
    var num1= parseInt(prompt("Ingrese un numero"));
var num2= parseInt(prompt("ingrese otro numero"));
}
console.log(num1,num2);