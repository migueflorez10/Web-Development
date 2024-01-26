"use strict"; // Código en modo JavaScript stricto

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // no se puede modificar el objeto
//producto.imagen = "imagen.jpg"; // se puede agregar propiedades al objeto

//Object.seal(producto); // no se puede agregar ni eliminar propiedades del objeto, pero si se puede modificar

console.log(Object.isFrozen(producto)); 

console.log(producto);