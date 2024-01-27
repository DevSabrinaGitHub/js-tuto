'use strict'


function listado(fruta1, fruta2, ...resto_frutas){
    
console.log("fruta 1", fruta1);  
console.log("fruta 2", fruta2);
console.log(resto_frutas);

}  //en el archivo_rest2 esta explicado que imprime.

//valores de entrada y llamada funcion 
listado("naranja", "banana", "melon", "sandia", "limon");

//la variable frutas pasa a fruta1
var frutas= ["naranja", "banana"];

//llamada funcion
listado (...frutas,  "melon", "sandia", "limon");

/*ya que frutas imprime naranja, banana en forma de array para fruta1
si quiero que imprima naranja para fruta1 y banana para fruta2
en la ultima llamada de la funcion debemos poner ...nombrevariable
en este caso es ...frutas*/

/* imprime 
fruta 1 naranja
fruta 2: banana
melon, sandia, limon
fruta 1: naranja | imprime en forma normal y no en array
fruta 2: banana
 melon, sandia, limon 
*/