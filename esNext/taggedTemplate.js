// tageed template - processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return "Outra string";
}

const aluno = "Guilherme";
const situacao = "Aprovado";
const respTag = tag`${aluno} está ${situacao}`;
console.log(respTag);
