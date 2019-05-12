//Este módulo irpa usar outros arquivos exportados, que se tornaram visiveis
const moduloA = require("./moduloA.js");
const moduloB = require("./moduloB.js");

//Utilizando o conteúdo exportado de móduloB
/* const person = moduloB.pessoas;
const calculaIdade = moduloB.calIdadeAtual; */

const anoNascIdade = moduloB.pessoas.map(pessoa =>
  moduloB.calIdadeAtual(pessoa.anoNas, 2019)
);
console.log(anoNascIdade);

//Utilizando o conteúdo exportado de móduloA
console.log(moduloA.mensagem);
console.log(moduloA.msg);
console.log(moduloA.ateLogo);
