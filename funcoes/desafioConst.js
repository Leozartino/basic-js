//Classe
class Pessoa {
  constructor(nome){
    this.nome = nome;
  }
  falar(){
    console.log(`Meu nome é ${this.nome}`)
  }
}

const pessoa01 = new Pessoa ('Leonardo');
pessoa01.falar();

//Função construtora
function PessoaP (nome){
  this.nome = nome;
  this.falarP = () => {
    console.log(`Olá, meu nome é ${nome}`)
  }

}

const pessoa02 = new PessoaP('Lucas');
pessoa02.falarP()
