// obejetos 

const nombreProducto = "Monitor de 20 pulgadas";    
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}



//console.log(producto.nombreProducto);// se puede acceder a las propiedades del objeto con el punto
//console.log(producto.precio);// se puede acceder a las propiedades del objeto con el punto
//console.log(producto.disponible);// se puede acceder a las propiedades del objeto con el punto

//console.log(producto["nombreProducto"]);// se puede acceder a las propiedades del objeto con corchetes

producto.imagen = "imagen.jpg"; // se puede agregar propiedades al objeto
delete producto.disponible; // se puede eliminar propiedades del objeto

console.log(producto);

