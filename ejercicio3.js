'use strict'

//imprimir todos los numeros impares que hay entre 2 numeros introducidos por el usuario 
//es decir si el usuario ingresa un 2 y un 10, imprimira 3,5,7,9

var n1= parseInt(prompt("ingrese un numero"));
var n2= parseInt(prompt("ingrese otro numero"));

while(n1<n2){
    n1++;
    if(n1%2 !=0){
        console.log(n1);
    }
}