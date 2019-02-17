//OPerador de desistruturação
//Tira algo de uma estrutura
//Tem duas formas de escrita | => { } para objeto   => [ ] para array |
//Esse operador simplica a forma de extrair de um objeto, por exemplo seu atributo da estrutura.

const pessoa = { //notação literal de objeto
    nome: 'Luisa',
    idade: '21',
    genero: 'F',
    enderecoo: {
        logradouro: 'RUa muito legal',
        numero: 705

    }
};
const {nome, idade} = pessoa; //operador destructuring/ usado para ter acesso as chaves e valor
const {nome: n, idade: i} = pessoa; //extraia da chave nome seu valor e armazene na variavel n/extraia da chave idade seu valor e armazene na variavel i de pessoa.
const {enderecoo: {logradouro, numero}} = pessoa; //extraia de enderecoo => logradouro e numero em um contexo maior de => pessoa.
console.log(logradouro);
console.log(nome, idade);
console.log(n, i);

/*
    CUidados: Quando for feita uma destructuring em dados aninhados deve ser notado se o caminho até 
    as chaves e valores está setado, ou o raiz exista para que possa ser extraído.

*/