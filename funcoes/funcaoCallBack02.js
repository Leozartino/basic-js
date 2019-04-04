//Vetor de notas
const notas = [
  3.2,
  8.9,
  9.2,
  7.0,
  7.1,
  6.5,
  2.2
];

//Objetivo: gerar um novo array com todas as notas menor do que 7.0
//Sem callback

let notasB = [];
for (let index in notas){
  if (notas[index] < 7.0){
    notasB.push(notas[index])
  }
};
console.log(notasB)

//Com callback
//Escreve menos código
notasB = notas.filter(nota =>  nota < 7);                       

console.log(notasB)