'use strict';

var nombres = ["sabrina", "carlos", "mayra", "cristina"];

for (let indice in nombres) {
    document.write("<li>" + nombres[indice] + "</li>");
}

// Buscar un elemento en un array con find
var busqueda_total = nombres.find(busqueda => busqueda === "carlos");

console.log(busqueda_total);


