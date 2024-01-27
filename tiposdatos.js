'use strict'
var n1= 7;
var n2= 1;

var op= n1+n2;

console.log("la suma de los dos numeros es", op);

var a= 44;
var cadena= "hola que tal";
var boolean= true;
console.log(cadena); //muestra hola que tal
console.log(boolean); //muestra true

//verdadero se representa 1 o true
//falso se representa  0 o false


//si queremos saber que tipo de datos tiene una variable utilizamos typeof
//esta funcion nos devuelve el tipo de dato exacto de cualquier variable
var b= 2;
var c= "hola que tal"
var fals= false; 

console.log( typeof b);  
console.log( typeof c);
console.log( typeof fals);

//Definicion de Numer y ParseInt- ParseFloat

var m= "33";
console.log(n); //devuelve 33, pero 33 anteriormente tenia comillas por lo tanto es 33 pero es string

//por lo tanto si tengo o quiero devolver ese string en otro string ej: 
console.log(Number(m)+7);  //devolvera 44 pero seguira siendo string 

//Ahora si tenemos un entero y queremos convertirlo en string: 
var e= 44;
console.log(e+7);  //imprimira la suma de eso que es 51

//si quiero concatener e indico un texto 

var nr = 10;
console.log(nr+'texto concatenado');  //imprimira:   10 texto concatenado

//convertir cualquier valor a string

var x= 20;
console.log(String(x)+4);
//imprimira 204 , es decir ese 20 que era entero, ahora es string