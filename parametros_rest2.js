'use strict'

function listado(fruta1, fruta2, ...resto_frutas){
    
console.log("fruta 1", fruta1);  
console.log("fruta 2", fruta2);
console.log(resto_frutas);

}

//valores de entrada y llamada funcion 
listado("naranja", "banana", "melon", "sandia", "limon");

//la variable frutas pasa a fruta1
var frutas= ["naranja", "banana"];

//llamada funcion
listado (frutas, "banana", "melon", "sandia", "limon");


/*imprimira
fruta 1:  naranja 
fruta 2: banana 
 
se habia almacenado en resto_frutas los valores "melon", "sandia", "limon", imprimira lo dicho
se cambia los valores de frutas, ahora ,frutas = naranja, banana pasa a fruta 1

en la ultima llamada de la funcion listado tenemos frutas, imprime naranja y banana
fruta 2 sigue siendo banana, imprime lo dicho

luego se imprime melon, sandia, limon en forma de array que es lo que contiene la variable rest
es decir en ...resto_frutas*/

