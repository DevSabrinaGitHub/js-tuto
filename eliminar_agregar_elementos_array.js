/* atrubuto SPLICE sirve para eliminar o agregar elementos */

// Crear un array de frutas
var frutas = ["manzana", "banana", "cereza"];

// Eliminar un elemento del array
frutas.splice(1, 1); // Elimina 1 elemento a partir del índice 1

console.log(frutas); // Resultado: ["manzana", "cereza"]

// Añadir elementos al array
frutas.splice(1, 0, "kiwi", "naranja"); // Añade elementos a partir del índice 1

console.log(frutas); // Resultado: ["manzana", "kiwi", "naranja", "cereza"]

// Reemplazar un elemento en el array
frutas.splice(1, 1, "uva"); // Reemplaza 1 elemento a partir del índice 1

console.log(frutas); // Resultado: ["manzana", "uva", "naranja", "cereza"]
