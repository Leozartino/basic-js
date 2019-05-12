function calIdadeAtual(anoNas, anoAtual) {
  let idade = null;
  idade = anoAtual - anoNas;
  return `Idade de: ${idade}`;
}

const pessoas = [
  {
    nome: "Leonardo",
    anoNas: 1996
  },
  {
    nome: "Lucas",
    anoNas: 1999
  },
  {
    nome: "Luísa",
    anoNas: 1998
  }
];

let a = 5;

//Somente o que foi definido no module.exports é visivel fora do módulo, qualquer
//outra coisa não poderá ser acessado se nao foi definido na sintaxe mencionada.
module.exports = {
  calIdadeAtual,
  pessoas
};
