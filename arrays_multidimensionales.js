'use strict'

/* los arrays multidimensionaes son arrays dentro de otros arrays*/

var categorias= ["accion", "terror", "comedia", "fantasia"];
var peliculas=[" año 0", "Mean Girls", "diario de una pasion", "barbie"];

// array dentro de otro (multid)
var cine= [categorias, peliculas];


/* mostramos el array en consola  */

console.log(cine);

/* luego vamos a ver que tenemos en la consola un array con 2 elementos 

(2)= array[4] , array[4]

abrimos e imprime 
0: (4) ["accion", "terror", "comedia", "fantasia"];
1: (4) [" año 0", "Mean Girls", "diario de una pasion", "barbie"];

si desplegamos por ej el primer array imprime
0: "accion"
1: "terror"
2: "comedia"
3: "fantasia"
lenght: 4

*/
