//arrow function

const sumar2 = ( n1, n2) => {
    console.log( n1 + n2);  
}

sumar2( 5, 10);

const lenguajeProgramacion = (lenguaje) => {
    console.log(`Estamos aprendiendo el siguiente lengauje de programacion: ${lenguaje}`);
}

lenguajeProgramacion('JavaScript');

// array methods
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

console.table(meses);

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 20 pulgadas', precio: 500},
];

console.table(carrito);

// forEach
meses.forEach((mes) => { // forEach es un metodo de los arreglos en JS que permite iterar sobre cada uno de los elementos del arreglo
    if(mes == 'marzo'){
        console.log('Marzo si existe');
    }
})

// includes
const resultado = meses.includes('marzo');// includes es un metodo de los arreglos en JS que permite saber si un elemento existe en el arreglo
console.log(resultado)


// some ideal para arreglo de objetos
const resultado2 = carrito.some((producto) => {
    return producto.nombre === 'celular';
})  // some es un metodo de los arreglos en JS que permite saber si un elemento existe en el arreglo

console.log(resultado2)

// reduce
const resultado3 = carrito.reduce((total, producto) => {
    return total + producto.precio;
}, 0);

console.log(resultado3)


// filter

const resultado4 = carrito.filter((producto) => {// filter es un metodo de los arreglos en JS que permite filtrar elementos del arreglo
    return producto.precio > 400;
});

console.log(resultado4)

const resultado5 = carrito.filter((producto) => {// filter es un metodo de los arreglos en JS que permite filtrar elementos del arreglo
    return producto.nombre !== 'celular';
});

console.log(resultado5)