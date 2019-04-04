const soma = function (x, y){
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma){
  console.log(operacao(a,b))
};

const mult = (valor1, valor2) => valor1 * valor2; //armazena arrow function na variavel

//imprimirResultado(3, 4, mult);

const pessoa = {
  nome: 'Leonardo',
  idade: 22,
  cpf: '033.377.932-07',
  apresentacao: function () {
    return `Olá me chamo ${this.nome} tenho ${this.idade} anos, cpf: ${this.cpf} 
    e isso é apenas um teste xD`;
  }
};

console.log(pessoa.apresentacao());
