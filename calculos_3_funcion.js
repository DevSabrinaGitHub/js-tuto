'use strict'

function calcular( n1, n2 ){
    
/*ejecutara 2 veces, es decir, calculara y mostrara el resultado de cada operacion, con los diferentes
valores*/ 

console.log("suma: "+ (n1+n2));
console.log("resta: "+(n1-n2));
console.log("multiplicacion: "+ (n1+n2));
console.log("division: "+(n1/n2));

}

for (var i= 0; i< 10; i++){

    console.log(i); //mostrara la iteraciones  0,1,2,3, etc y debajo los calculos

    calcular(i, 2);    
           
    /* los valores de i con el 2 pasaran a n1 y n2
    y se haran los calculos, i incrementara del 0 al 9
    es decir irá 0, 2 
    1,2 , etc, e irá haciendo los calculos hasta que finalice el bucle
    
    */
}