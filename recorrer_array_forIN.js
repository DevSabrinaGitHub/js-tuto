'use stric'

var nombres= ["sabrina", "carlos", "mayra", "cristina"];


//recorrer un array con in

for (let indice in nombres) {
    document.write("<li>" + nombres[indice] + "</li>");
}

/*
En este caso, for...in itera sobre los índices del array, y
 luego puedes acceder a los elementos utilizando esos índices */