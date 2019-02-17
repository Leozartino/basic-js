const obj1 = {};
obj1.nome = 'Lucas'; //criando um par chave-valor dinâmicamente

function Objeto (nome){
    
    this.nome = nome; //através do this é possivel deixar visivel para todo o resto do código a variavel ou chave nome.
    this.exec = function () { //torna público a função exec
        console.log('Exec...');
    };
};

const obj2 = new Objeto('Matheus'); //instanciando uma função e criando um objeto passando o parametro de uma string
const obj3 = new Objeto('Cezar'); //outro objeto com o respectivo parametro chave e valor.

console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();

//Através do . é possivel acessar inumeras funcionalidades 