'use strict'

var n= 2023;
var texto= "hola Mundo, aqui hace calor, calor en argentina";
var texto2= "Bienvenido";


//indexOf buscara la palabra "calor" y dira en que posicion esta
var busqueda= texto.indexOf("calor");
console.log(busqueda); //imprimira 22



var busqueda1= texto.lastIndexOf("calor");
console.log(busqueda1);  //buscara la ultima palabra calor e imprimira la posicion que es 29


/* Este metodo es igual al de indexOf */
var busqueda= texto.search("calor"); //imprime 22, si la palabra no esta imprime -1
console.log(busqueda);



//este metodo devuelve todo el texto
var busqueda= texto.match("argentina");
console.log(busqueda);
//index: caracter desde donde empieza osea 38
//input: todo el texto : hola Mundo, aqui hace calor, calor en argentina"
//lenght= 1


//si quiero que busque las palabras en forma global (gi) y aparezca las veces aparecidas
var busqueda= texto.match(/calor/gi);
console.log(busqueda);
//  (2)= [calor , calor]
//  lenght= 2


//busqueda por posiciones de una cadena (string)
var busqueda= texto.substring(12, 27);             //tambien se utiliza sub.str
console.log(busqueda);  //imprime aqui hace calor



//sacar una letra, osea solo un caracter
var busqueda= texto.charAt(6);
console.log(busqueda);  //imprime u


//starswith   devuelve true o false si encuentra o no el texto
var busqueda= texto.startsWith("hola"); //imprime true
console.log(busqueda);


//buscar el final 
var busqueda= texto.endsWith("en argentina");
console.log(busqueda);  //devuelve true


//buscar una palabra, poniendo toda la palabra o los indices como h, ha, ce, hac

var busqueda= texto.includes("hace");
console.log(busqueda);  //devuelve true

