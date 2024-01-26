// agregar elementos a un arreglo

const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

//numeros[5] = 60; // Agrega un elemento al final del arreglo

numeros.push(60); // Agrega un elemento al final del arreglo

numeros.unshift(-10, -20, -30); // Agrega un elemento al inicio del arreglo

//meses.pop(); // Elimina el ultimo elemento del arreglo
//meses.shift(); // Elimina el primer elemento del arreglo

meses.splice(2, 1); // Elimina un elemento del arreglo en la posicion 2

console.table(meses);
console.table(numeros);


// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, "Junio"]; // Spread Operator

console.log(nuevoArreglo);