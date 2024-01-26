// arreglos en JS

const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril");

console.table(meses);

// un arreglo que contiene datos de todo tipo
const deTodo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo: "Programador"}, [1,2,3]];

console.table(deTodo);

// Acceder a los valores de un arreglo

console.log(numeros[0], numeros[2], numeros[4]);

// Conocer la extension de un arreglo

console.log(numeros.length);

meses.forEach(function(mes) { // forEach es un metodo de los arreglos en JS que permite iterar sobre cada uno de los elementos del arreglo
    console.log(mes);
});