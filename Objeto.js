console.log(typeof Object); //é uma função 
console.log(typeof new Object()); //instanciação de um objeto

const Cliente = function () {

};
console.log(typeof Cliente);
console.log(typeof new Cliente);
//A patir de uma função pode ser definido um objeto, instanciado uma função. 

class Produto{}; //Uma classe é uma função internamente em JS.
console.log(typeof Produto);