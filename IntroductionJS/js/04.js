// String --> Cadenas de texto 

const producto = 'Monitor 20 pulgadas';  // las mas usadas
const producto2 = String('Monitor 24 pulgadas');
const producto3 = new String('Monitor 27 pulgadas'); // no son como tal string, son objetos

// .length --> para saber la cantidad de caracteres que tiene un string
console.log( producto.length);
console.log( typeof producto2);
console.log( typeof producto3);

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
console.log(tweet.indexOf('JavaScript')); // indexOf busca la palabra y devuelve la posicion en la que se encuentra

// .includes --> devuelve true o false si encuentra la palabra
console.log(tweet.includes('tablet'));
console.log(tweet.includes('JavaScript'));