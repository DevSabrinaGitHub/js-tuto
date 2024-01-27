'use strict'

var nums= [10, 20, 30 , 40];

/*metodo som se utiliza para comprobar una CONDICION con los elementos de un array
devolviendo true o false */




/* ej: comprobar si 10 es mayor o igual a 20
*/ 

var comp = nums.some(comprobar => comprobar >= "20");

console.log(comp);     //devuelve true