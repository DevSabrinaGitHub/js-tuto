'use strict'

var edad= 25; 
var imprimir ="";

//una forma de hacer es esta
/*switch(edad){
    case 18: 
        console.log("eres mayor de edad y tienes: "+edad);
    break;
}
*/ 


//otra forma de hacer

switch (edad){
    case 25:
         imprimir= "eres un adulto";
    break;
    case 15:
         imprimir= "eres menor";
    break;
    case 75: 
        imprimir= "eres anciano";
    default:
        imprimir= "error";
    break;
}

console.log(imprimir);   
//si edad esta asignada en 25 entonces imprimira eres un adultp
// si cambio edad por 15 imprimira eres menor