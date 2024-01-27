
'use strict'
/* muestrar todos los numeros divisores de un numero ingresado en prompt*/

var num1= parseInt(prompt("ingrese un numero")); //ingresa un 10

    for(var i= 1; i< num1; i++){

        if(num1%i ==0){
            console.log("divisor: "+i); //imrpimira 1,2,5
        }
       
    }