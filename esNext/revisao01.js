//O escmaScript é uma especificação da linguagem JavaScript
//Um padronizador da linguagem do JavaScript (Versões para o JS).
//let e const - ES6

{
  var t = 5;
  let teste = 5;
  console.log(teste, t);
}

//Template String

const variavelGenerica = 9;
console.log(`
Imprimindo 
a
variavel
genérica:
${variavelGenerica}`);

//Destructuring:  tirar algo de um objeto ou array.

const [a, b, ...resto] = "laço";
console.log(a, b, resto);

const [x, , y] = [1, 2, 3, 5, 6, 7];
console.log(x, y);

const { nome, idade } = { nome: "Leonardo", idade: 22 };
console.log(nome, idade);

const user = {
  nome: "Leonardo",
  idade: 22,
  endereco: {
    logradouro: "Avenida Poeta Castro Alves",
    numero: 705,
    bairro: "Comercial"
  }
};

const {
  nome: n,
  idade: i,
  endereco: { logradouro }
} = user;

console.log(n, i, logradouro);

function mostraNome({ nome }) {
  //desestruturando o objeto, pegando somente o nome
  //é claro, o objeto passado deve conter chave esperada no paremetro declarado ^^
  console.log(nome);
}

mostraNome(user);
