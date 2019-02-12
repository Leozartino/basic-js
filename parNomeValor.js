//par: chave/valor

const saudacao = 'Olá'; //conntexto léxico 01

function exem () {
    const saudacao = 'Olá, você'; //contexto léxico 02; não gera conflito, contextos diferentes.
    return saudacao;
};

//Objetos são pares aninhados de nome/valor:
const cliente = { 
    nome: 'Pedro',
    idade: '15',
    genero: 'M',
    endereco: { //Poderia ter mesmo nome ou chave, mas se estiverem em contextos diferentes não há problema.
        logradouro: 'Tal', 
        bairro: 'Tal e tal'
    }
};

console.log(saudacao);
console.log(exem());
console.log(cliente);