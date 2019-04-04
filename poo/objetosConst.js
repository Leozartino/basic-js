//pessoa -> 123 -> {...}
const pessoa = {nome: 'Ana'};
pessoa.nome = 'Maria'; //roda!

//pessoa -> 468 -> {...}
//pessoa = {nome: 'Pedro'}; //errado, não posso mudar o endereço de uma constante. 
//Assignment to constant variable.

//Não pode alterar, atualizar ou deletar um dado do objeto
Object.freeze(pessoa); //não permite mais alterações internas no objeto, seu par chave: valor não é alterado.
pessoa.nome = 'Luis'; //qualquer tentativa de alteração é ignorada
console.log(pessoa);