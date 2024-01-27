'use strict'

/*REST: se utiliza cuando tenemos muchos valores de entrada para los parametros, y queremos simplificarlos
solo con una variable en la funcion.
se declara ...nombre_variable 
en este caso es ...todas_las_frutas*/ 
//la funcion rest pasa todos los valores a un array automaticamente

function listado(fruta1, fruta2, ...todas_las_frutas){

console.log("fruta 1", fruta1);  //imprimira naranja
console.log("fruta 2", fruta2);   //imprimira banana
console.log(todas_las_frutas);   //imprimira melon, sandia, limon

}

listado("naranja", "banana", "melon", "sandia", "limon"); //valores de entrada