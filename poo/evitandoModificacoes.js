//Oject.preventExtensions -> não vai permir que o objeto seja extendido (não será possivel adcionar novos atributos nesse objeto).
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel: ', Object.isExtensible(produto))
produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
console.log(produto)
delete produto.tag;
console.log(produto);

//Object.seal -> Não consegue adcionar nem excluir
const pessoa = {nome: 'Juliana', idade: 35};
Object.seal(pessoa);

console.log('Selado', Object.isSealed(pessoa));

//Object.freeze -> selado + valores constantes