'use strict';

var nombres = ["sabrina", "carlos", "mayra", "cristina"];


// Buscar el índice de un elemento en un array con findIndex
var busquedaIndice = nombres.findIndex(busqueda => busqueda === "carlos");

console.log("Índice de 'carlos':", busquedaIndice);
