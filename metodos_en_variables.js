'use strict'
/*un Metodo es una funcion pero aplicada a un objeto o variable*/
// por ej: convertir un numero a un string
//los metodos reciben valores (variables), y hace una tarea, sea convertir string, mayusc, minusc, etc


var num = 444;
var texto = "bienvenido";
var texto2= "USUARIO";
var nombre= "sabrina"


num.toString(); //ahora num que era un entero 444, ahora es un string
console.log(num); //imprime 444

//convierte de minuscula a masyuscula
var dato= texto.toUpperCase();
console.log(dato);


//mayuscula a minuscula
var dato2= texto2.toLowerCase();
console.log(dato2);


//longitud
console.log(nombre.length);  //imprime 7


//concatenar/ unir textos
var textototal= dato+  " " +dato2+  " " + nombre;   //imprime BIENVENIDO usuario sabrina
console.log(textototal);

/*otra forma de concatenar
var textotal= texto.concat(" " +texto2);
 console.log(textototal);
 */
