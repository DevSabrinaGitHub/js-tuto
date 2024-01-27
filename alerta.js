'use strict'

//ventana emergente
alert("alerta usuario");

//tendra si/no automatiamente en otra ventana
confirm("¿estas seguro de continuar?");

//si quiero saber el resultado que devuelve el usuario osea si preciono aceptar o cancelar hago: 
var result= confirm("¿estas seguro de continuar?");
console.log(result); //si preciono aceptar entonces devolvera true



//ingreso de datos
//para capturar el resultado debemos escribir:   var nombrevariable prompt("mensaje");

 var result2= prompt("¿que edad tiene?");  
 //escribe el mensaje con prompt
 // usuario ingresa su edad a traves de la ventana
 //se guarda en result
 console.log(result2);  //en la consola nos mostrara lo que ingreso el usuario