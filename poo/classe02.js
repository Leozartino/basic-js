class Avo {
  constructor(sobrenome){
    this.sobrenome = sobrenome;
  }

}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Engenheirob'){
    super(sobrenome);
    this.profissao = profissao; //this.algumaCoisa atribui ao objeto associado o valor passado depos do =
  }

}

class Filho extends Pai {
  constructor(){
    super('Silva')
  }
}

const filho01 = new Filho();

console.log(filho01);