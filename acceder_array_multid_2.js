'use strict';

/* Los arrays multidimensionales son arrays dentro de otros arrays */
var categorias = ["acción", "terror", "comedia", "fantasía"];
var peliculas = ["año 0", "Mean Girls", "diario de una pasión", "barbie"];

// Array dentro de otro (multidimensional)
var cine = [categorias, peliculas];

/* Mostramos el array en la consola */
console.log(cine);

// Acceder a uno de los elementos
console.log(cine[0][1]);

//imprime terror
