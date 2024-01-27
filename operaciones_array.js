'use strict';

/* Los arrays multidimensionales son arrays dentro de otros arrays */
var categorias = ["acción", "terror", "comedia", "fantasía"];
var peliculas = ["año 0", "Mean Girls", "diario de una pasión", "barbie"];

// Array dentro de otro (multidimensional)
var cine = [categorias, peliculas];

//añadir un elemento mas a un array 

peliculas= ["Batman"];

console.log(peliculas);   //imprimee batman 



/*que el usuario introduzca los elementos de un array   */

var elemento= "";

do{
    elemento= prompt("ingrese su pelicula");   //repetir 
    peliculas.push(elemento);

}while(elemento != "ACABAR"){       //hasta que el usario ingrese ACABAR
}


//para eliminar el elemento acabar utilizo pop, sacara SOLO el ultimo elemento

peliculas.pop();

console.log(peliculas);

//SI QUIERO SACAR LOS TRES ULTIMOS ELEMENTOS: SOLO AÑADO TRES VECES:  peliculas.pop();