/* Los arrays multidimensionales son arrays dentro de otros arrays */
var categorias = ["acción", "terror", "comedia", "fantasía"];
var peliculas = ["año 0", "Mean Girls", "diario de una pasión", "barbie"];

// Array dentro de otro (multidimensional)
var cine = [categorias, peliculas];

// Encontrar el índice del elemento "barbie" en el array peliculas
var indice = peliculas.indexOf("barbie");

console.log("Índice de 'barbie':", indice);

// Verificar si se encontró el elemento antes de intentar eliminarlo
if (indice !== -1) {

    // Eliminar el elemento "barbie" del array peliculas usando splice
    peliculas.splice(indice, 1);
}

console.log(peliculas);

/*

En JavaScript, el método indexOf devuelve -1 si el elemento que estás buscando no se encuentra en el array.
 En caso contrario, devuelve el índice del primer elemento coincidente. 
 La condición if (indice !== -1) se utiliza para verificar si se encontró el elemento en el array.

peliculas.indexOf("barbie"): Devuelve el índice de "barbie" en el array peliculas o -1 si no se encuentra.

if (indice !== -1): Esta condición se evalúa como verdadera si indexOf no devolvió -1, es decir,
si se encontró el elemento "barbie".

peliculas.splice(indice, 1): Si el elemento "barbie" se encontró (indice !== -1), 
entonces se utiliza splice para eliminar el elemento en la posición indicada por indice 
(eliminando 1 elemento).

console.log(peliculas): Imprime el array peliculas después de realizar la operación de eliminación. */