'use strict'

/*utilizando un bucle mostrar la suma y media de los numeros introducidos por teclado
hasta que el usuario ingrese un numero negativo e imprimir el resultado */

var suma= 0;
var contador= 0;

do{
    var num1= parseInt(prompt("ingrese un numero"));
   
    if (isNaN(num1)){
        num1= 0;
    }else if(num1 >=0){
        suma+= num1;
        contador++
    }
    
}while(num1 >= 0)
 //mensaje para el usuario
alert("la suma de todos los numeros es: "+suma);
alert("la media de todos los numeros es: "+(suma/num1));

//ver lo que escribio
console.log(num1);
console.log(suma);
console.log(contador);