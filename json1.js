//JSON : JAVASCRIPT OBJECT NOTATION 

//son arrays que nos permiten interactuar de manera simple, rapida, permitiendonos hacer objetos simples

var pelicula = {
    //idicamos las propiedades que tendra mi objeto pelicula: titulo

    titulo: "Simuladores",
    year: 2000,
    pais: "argentina"
};

//acceder a estas propiedades
console.log(pelicula)

//acceder a una propiedad
console.log(pelicula.titulo)

//cambiar nombre del titulo
pelicula.titulo ="superman begins"


//tra forma de crear un objeto

var objeto2= [
    {titulo: "3 metros sobre el cielo", year: 2012, pais: "España"},
    pelicula
];