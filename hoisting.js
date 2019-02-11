/*
    Em certas linguagens de programação, declarar variaveis após a sua chamada ou uso geraria um problema de 'not defined'
    em JS, neste caso ela é içada ou chamado efeito hoisting.
*/

//Içar ou içamento, jogar pra cima.

console.log('a = ' , a);
var a = 2; // variavel delcarada no topo, mas nao inicializada no topo. Inicializada na linha atual.
console.log('a = ' , a);


function teste(){ 
    console.log(b);
    var b = 2; //também ocorre o hoisting, vem antes de qualquer sentença dentro deste escopo.
    console.log(b);
};

teste();

//Já utilizando  o let para definir variaveis, o hoisting não ocorre :)

console.log(c); //gera um erro, pois a variavel não foi definida anteriormente ao uso.
let c = 5; //não ocorre o hoisting, definida nesta linha e inicializada também na mesma.
console.log(c); 