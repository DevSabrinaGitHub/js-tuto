'use strict'

/* hacer un programa que muestre todos los numeros entre los numeros introducidos por el mismo*/ 
 
var n1 = parseInt(prompt("Introduzca un número"));
var n2 = parseInt(prompt("Introduzca otro número"));

document.write("<h2>" + n1 + " hasta " + n2 + " son estos números:</h2>");

for (var i = n1; i <= n2; i++) {
    document.write(i + " ");
}

// Si deseo mostrar el resultado fuera del bucle, debo mover document.write(i); después del bucle.
// document.write(i);

//mostraria por pantalla ej : 1 2 3 4 


/*si quiero de este modo: 
1
2
3
4 */ 

// document.write(i+ "<br/>");

