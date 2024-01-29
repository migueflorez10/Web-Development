//switch 

const metodoPago = 'Tarjeta';

switch(metodoPago){ //evalua una expresion
    case 'Efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break; //para que no siga evaluando
    case 'Tarjeta':
            console.log(`Pagaste con ${metodoPago}`);
            break; //para que no siga evaluando
    case 'Transferencia':
        console.log(`Pagaste con ${metodoPago}`);
        break; //para que no siga evaluando
    default:
        console.log('Aun no has pagado');
        break;
}


