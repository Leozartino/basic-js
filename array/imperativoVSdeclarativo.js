const alunos = [
  { nome: "João", nota: 7.3, bolsita: false },
  { nome: "Maria", nota: 9.3, bolsita: true },
  { nome: "Lucas", nota: 8.3, bolsita: false },
  { nome: "Miguel", nota: 9.3, bolsita: false },
  { nome: "Hugo", nota: 8.7, bolsita: true }
];

//Abordagem imperativa
//Nessa abordagem o código é uma coisa só, ta fazendo tudo ao memso tempo!!
//Não existe papeis, funções especialistas (redundante, mas ok!)
//Menos re-uso em outros contextos semelhantes
let media,
  total = null;
const qntdAlunos = alunos.length;

for (let i = 0; i < qntdAlunos; i++) {
  total += alunos[i].nota;
}
media = total / qntdAlunos;
console.log(media);

//Declarativa
//Em uma abordagem mais declarativa nos preocupamos com o que tem de ser feit
//e  não como deve ser feito, minuciosamente ou em detalhes, como na abordagem imperativa.
const getNota = aluno => aluno.nota;
const soma = (anterior, atual) => anterior + atual;
const calMedia = (notasSomadas, qntd) => {
  return notasSomadas / qntd;
};

const resultadoMedia = alunos.map(getNota).reduce(soma);

console.log(calMedia(resultadoMedia, qntdAlunos));

//select codigo, nome, email from clientes where ativo = 1
