'use strict'


var texto= "En argentina naci, tierra de diego";


//reemplazamos la palabra diego por messi 
var busqueda= texto.replace("diego", "messi");

console.log(busqueda);



//imprime el string del 13 al final 
var busqueda= texto.slice(13);
console.log(busqueda);     //naci, tierra de messi



//eliminar una palabra y guardar en un array lo que sobra
var busqueda= texto.split("naci");
console.log(busqueda);   //imprime ['En argentina', ',tierra de messi']


/*eliminar espacios desde el comienzo y en el final del texto
se utiliza por ej: cuando no estoy interesada en guardar los espacios que agrega el usuario 
al agregar un correo etc*/
var busqueda= texto.trim();
console.log(busqueda);