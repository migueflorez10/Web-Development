// function sumar(n1, n2){
//     return n1 + n2;
// }

// const resultado = sumar(5, 5);
// console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total += precio; 
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(200);

function pagoTotal(total){
    return total * 1.15;    // 15% de impuesto
}

const totalPagar = pagoTotal(total);

console.log(total);
console.log(totalPagar); 
console.log(`el total a pagar teniendo en cuenta los impuestos es de: $${totalPagar}`);// Template String