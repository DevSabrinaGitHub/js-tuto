'use strict';

//una funcion callcack es una funcion anonima que no posee un nombre
/* y se pasa los valores de un patrametro a otra funcion*/
/* por lo tanto si no quiero asginar un nombre a la function en especifico, ya que quiero hacer
muchas tareas entonces no asigno un nombre, sera una funcion anonima. */


//parametro mostrarSuma  y sumapor2

var resultado = function (n1, n2, mostrarSuma, sumaPor2) {
    var sumar = n1 + n2;
    //calcula
    mostrarSuma(sumar);   //la suma es 12
    sumaPor2(sumar);      //la suma por 2 es 24
};


/* 5 para n1 
7 para n2 

 para los parametros mostarsuma y sumapor2 sera una funcion callback 
 Podemos ver que en function no posee un nombre 
 Pero la funcion anonima function recibe un valor o dato (dato) */


resultado(5, 7, function (dato) {
    console.log("La suma es: ", dato);  //dato contiene la suma de 5 y 7
},

function (dato) { // se vuelve a llamar la funcion dato con el valor 12 y se multiplica * 2

    console.log("La suma por dos es: ", dato * 2);  //imprime el mensaje
});

