// objetos 

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

// forma anterior 
const precioProducto = producto.precio
const nombreProducto = producto.nombreProducto

console.log(precioProducto)
console.log(nombreProducto)

// forma actual = destructuring

const {precio} = producto // se crea una variable con el mismo nombre de la propiedad del objeto y se asigna el valor de la propiedad
// const {precio, nombreProducto} = producto // se crea una variable con el mismo nombre de la propiedad del objeto y se asigna el valor de la propiedad
console.log(precio)