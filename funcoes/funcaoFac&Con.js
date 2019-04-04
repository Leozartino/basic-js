//F Factory

const funcaoF = (nome, endereco, idade) => {
  return {nome,endereco,idade}
}

const ob01 = funcaoF('Leonardo', 'Av Poeta Castro Alves', 22) //criando um objeto
const ob02 = funcaoF('Lucas','Rua das Palmeiras', 16) //criando outro objeto

//console.log(ob01, ob02)

//F Constructor

const Pessoa = function   (nome, idade = 1)  {
  this.nome = nome;
  this.idade = idade;

  this.falar = palavras => console.log(`${this.nome} diz: ${palavras}`);
  this.envelhecer = (anos = 1) => this.idade += anos; //altera direto o valor de idade e atualiza para o objeto.
}

const leonardo = new Pessoa('Leonardo', 22);
const lucas = new Pessoa('Lucas', 23);

leonardo.falar('Olá, isso é apenas um teste');
console.log(leonardo.envelhecer());
lucas.falar('Olá, eu sou o Lucas');
console.log(lucas.envelhecer());
console.log(leonardo, lucas)


