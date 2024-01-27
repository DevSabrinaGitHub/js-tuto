'use strict'

//operadores: 

//        AND= &&
//        OR= ||
//        NEGACION = !

var year= 2023;
//NEGACION
if( year != 2016){
    console.log("2016 no es el año ");
}

//AND
if (year >= 2023 && year <= 2023){
    console.log("el año es "+year);
}

//OR
if(year == 2023 || year <2010){
    console.log("el año actual es " +year);
}

if(year== 2023 || year >=2023 && year <=2023){
    console.log("año correcto: "+year);
}