// si tenemos por ej un formulario en donde el usuario escribira algo. podemos seleccionar ese campo y añadir eventos

var input= document.querySelector("#campo");



//añadir un evento en la variable input es decir si el usuario da un click en el campo 
input.addEventListener('focus', function(){
    console.log("[focus] estas dentro del campo");
});



//si el usuario da click fuera del campo 
input.addEventListener('blur', function(){
    console.log("[blur] estas fuera del campo")
})



//si el usuario presiona una tecla 
input.addEventListener('keydown', function(event){ //pasamos como parametro un evento
    console.log("[keydown]el usuario esta pulsando una tecla", String.fromCharCode(event.keyCode));

    //lo que hace esto es convertir el evento a un string
})



//si el usuario ya presiono la tecla 
input.addEventListener('keypress', function(event){
    console.log("[keypress] tecla presionada por el usuario " , String.fromCharCode(event.keyCode));
})

//ejemplo:
// Pulsando la tecla s
// tecla presionada por el usuario s

//captura cuando una tecla se solto
input.addEventListener('keyup', function(event){
    console.log("[keyup] tecla soltada " , String.fromCharCode(event.keyCode));
})