//crear fechas en js

var fecha= new Date();
var year = fecha.getFullYear(); //sacar año
var mes = fecha.getMonth();  //mes
var dia = fecha.getDay();  //dia
var hora= fecha.getHours(); //hora


var textohora= `
    El año es ${year}  
    El mes es ${mes}
    El dia es ${dia}
    La hora es ${hora}
    `;
console.log(fecha);
console.log(textohora); //imprime el año es : 2024: 