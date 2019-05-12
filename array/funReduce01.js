//Reduce -> parametro que será acumulado de chamada em chamada

const alunos = [
  { nome: "João", nota: 7.3, bolsita: false },
  { nome: "Maria", nota: 9.3, bolsita: true },
  { nome: "Lucas", nota: 8.3, bolsita: false },
  { nome: "Miguel", nota: 9.3, bolsita: false },
  { nome: "Hugo", nota: 8.7, bolsita: true }
];

const resultado = alunos
  .map(elemento => elemento.nota)
  .reduce((acumulador, atual) => {
    console.log(acumulador, atual);
    return acumulador + atual;
  }, 5);
console.log(resultado);
