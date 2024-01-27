'use strict'

function saludar(texto){

    var v_local= "hola mundo";

    console.log(v_local);
    console.log(texto);
    return texto;
}
saludar();


var texto= "hola a todos";

saludar(texto);

// imprime
/* hola mundo 
hola mundo 
hola a todos */