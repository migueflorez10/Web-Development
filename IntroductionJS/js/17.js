// declaracion de una funcion 
function sumar() {
    console.log(10+10);
}

sumar();

// expresion de una funcion 
const sumar2 = function(){
    console.log(5+5);
}

sumar2();


// IIFE
(function(){ // se ejecuta inmediatamente
    console.log('Esto es una funcion');
})();