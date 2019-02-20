const pessoa = {
  nome: 'Leonardo',
  saudacao: 'Eai, man',
  fun (){
    console.log(this.saudacao);
  }
};
//this pode variar
// bind "amarra" o this para o objeto pessoa, o this aponta sempre para pessoa.
var objeto_funcao = pessoa.fun.bind(pessoa);
objeto_funcao()
