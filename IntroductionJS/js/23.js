// Estructuras de control

// const puntaje = 100; 

// if (puntaje === 1000) {
//     console.log('Si es igual');
// } else {
//     console.log('No es igual');
// }

// if (puntaje !== 1000) {
//     console.log('Es diferente');
// } else {
//     console.log('si es igual');
// }

const efectivo = 1000;
const carrito = 800; 

if (efectivo > carrito){
    console.log(`El usuario tiene la capacidad economica de pagar la compra`);
} else {
    console.log(`Fondos insuficientes, por lo tanto no puede pagar la compra`);
}



const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') {
    console.log(`Acceso a todo el sistema`);
} else if (rol === 'EDITOR') {
    console.log(`Puedes entrar pero no puedes hacer mucho`);
}