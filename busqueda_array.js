'use strict';

var nombres = ["sabrina", "carlos", "mayra", "cristina"];

for (let indice in nombres) {
    document.write("<li>" + nombres[indice] + "</li>");
}

// Buscar un elemento en un array con find
var busqueda_total = nombres.find(function(busqueda_nombre){
    return busqueda_nombre === "carlos"; // Compara con el elemento actual, no con el array completo
});

console.log(busqueda_total);

//si imprime undefined es porque no lo encontro 