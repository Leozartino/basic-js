//usando a notação literal
const objeto01 = {};
//criando a partir da função construtora
const objeto02 = new Object();
//criando a aprtir de uma função construtora personalizada
function Produto(nome, preco, desconto){
  this.desconto = desconto;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto)
  }
};
const p1 = new Produto('produto01', 255.36, 0.5);
console.log(p1.getPrecoComDesconto())
//criando a partir de uma função factory
function criarFuncionario(nome, salarioBase, faltas ){
  return {
    nome,
    salarioBase,
    faltas,
    getSalario(){
      return(salarioBase / 30 ) * (30 - faltas);
    }
  }
}
const f1 = criarFuncionario('João', 1200, 3);
console.log(f1.getSalario())

//Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

//Função famosa que retorna um objeto...
const fromJson = JSON.parse('{"info":"Sou um estudante"}');  //JSON é um formato textual, string
console.log(typeof fromJson.info);