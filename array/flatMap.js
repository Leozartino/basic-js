//constante chamada escola é um array de objetos, cada objeto é uma turma
//dessa escola.

const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1
      },
      {
        nome: "Ana",
        nota: 9.1
      }
    ]
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9
      },
      {
        nome: "Roberto",
        nota: 7.3
      }
    ]
  }
];

//Objetivo => extrair as nota de todos os alunos, consideranto todas as turmas.
const getTurmaAlunosNotas = turma => turma.alunos.map(alunos => alunos.nota);

let notasGlobais = escola.map(getTurmaAlunosNotas);
