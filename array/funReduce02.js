const alunos = [
  { nome: "João", nota: 7.3, bolsita: false },
  { nome: "Maria", nota: 9.3, bolsita: true },
  { nome: "Lucas", nota: 8.3, bolsita: false },
  { nome: "Miguel", nota: 9.3, bolsita: false },
  { nome: "Hugo", nota: 8.7, bolsita: true }
];

//Desafio 1: Todos os alunos são bolsistas?
const resul = alunos
  .map(obj => obj.bolsita)
  .reduce((anterior, atual) => anterior && atual);
console.log(resul ? "Todos são bolsistas" : "Nem todos são bolsistas!");

//Desafio 2: Algum aluno é bolsista?
const resul02 = alunos
  .map(obj => obj.bolsita)
  .reduce((atual, anterior) => atual || anterior);
console.log(
  resul02 ? "Algum aluno é bolsita, sim!!" : "Nenhum aluno é bolsita, ta fraco."
);
