'use strict'

function mensaje(){

    alert("bienvenido usuario");
}


function mensaje2(){

var num1= parseInt(prompt("Ingrese un numero"));
var num2= parseInt(prompt("ingrese otro numero"));

if(num1>num2){
  alert(num1+ num2);
}else{
    alert(num1*num2);
}
}
mensaje();
mensaje2();
