'use strict'
//prueba con VAR

var a= 50;
console.log(a); //imprime 50

if(true){ //si a vale 50 entonces

    var a= 40; //actualizamos. var ahora tiene valor 40
    console.log(a); //imprime 40
}
console.log(a); //imprime 40

//imprimira 50- 40- 40

//prueba con LET

var texto= "aprendiendo a programar";
console.log(texto); //saldra aprendiendo a programar

if(true){
    let texto= "java para todos";
    console.log(texto); //saldra java para todos
}
console.log(texto); //saldra aprendiendo a programar