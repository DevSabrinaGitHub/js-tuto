'use strict'

/*funcion flecha 

simplemente se le quita la palabra function 
y se añade flechas 

'use strict';
var resultado = function (n1, n2, mostrarSuma, sumaPor2) {
    var sumar = n1 + n2;
    mostrarSuma(sumar);
    sumaPor2(sumar);
};

resultado(5, 7, function (dato) {
    console.log("La suma es: ", dato);
},
function (dato) {
    console.log("La suma por dos es: ", dato * 2);
});

*/ 

//quedaria:
// tambien se puede quitar los parentesis, en este caso dejamos en dato

var resultado = function (n1, n2, mostrarSuma, sumaPor2) {
    var sumar = n1 + n2;
    mostrarSuma(sumar);
    sumaPor2(sumar);
};

resultado(5, 7, (dato) => {

    console.log("La suma es: ", dato);
},
 (dato) => {
    console.log("La suma por dos es: ", dato * 2);
});