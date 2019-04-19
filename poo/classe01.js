//Orientação objetos em JS é centrado em funções
//Criar objetos literais e a paritr da chamada de classes.
class Lancamento {
  constructor(nome = 'Generico', valor = 0){
    this.nome = nome; //o this adciona ao objeto o atributo associado depois do =
    this.valor = valor; //idem 
  } //metodo especial que é chamado no momento que a classe é instanciada.

} 

class CicloFinanceiro {
  constructor(mes, ano){
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }
  addLamcamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
  }
  sumario(){
    let valorConsolidade = 0;
    this.lancamentos.forEach(l => {
      valorConsolidade += l.valor;
    })  
    return valorConsolidade;
  }
}

const salario = new Lancamento('Salario', 1850);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLamcamentos(salario, contaDeLuz);
console.log(contas.sumario())


