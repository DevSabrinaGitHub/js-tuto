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


//converti un array a texto o string

var convertir_string= peliculas.join();


console.log(convertir_string);

/*imprime :
Índice de 'barbie': 3
año 0, Mean Girls, diario de una pasión
*/
