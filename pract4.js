'use strict';

/* Mostrar si un número es par o impar. Si no es válido, repetir. */

var x;

do {
    x = parseInt(prompt('Ingrese un número'));

    if (!isNaN(x)) {
        if (x % 2 === 0) {
            alert('Es un número par');
        } else {
            alert('Es un número impar');
        }
    } else {
        alert('Por favor, ingrese un número válido');
    }

} while (isNaN(x));
