'use strict'


//sustituir valores dentro de un string sin estar concatenando
//sustituyendo variables de manera sencilla


var nombre= prompt("ingrese su nombre");
var apellido= prompt("ingrese su apellido"); 


/*si quiero ya puedo asignar los datos para nombre o apellido
var nombre = "sabrina";
var apellido= "tanto"; */



var texto = `
    <h2> Mi nombre es ${nombre} </h2>
    <h2> Mi apellido es ${apellido} </h2>
`;

document.write(texto);
