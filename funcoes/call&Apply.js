//Duas formas diferentes de executar uma função em JS

function getPreco(imposto = 0, moeda = 'R$'){
  return `${moeda} ${this.preco * (1 - this.desc)}`
}

const produ01 = {
  preco: 2500,
  desc: 0.15,
  getPreco
};

const produ02 = {
  preco: 3201,
  desc: 0.4                                                                                                                                                       
};
//Diferença na passagem dos parametros
console.log(getPreco.call(produ02, 0.17, '$'))// no call passa-se o contexto e depois os parametros pertencentes a função.
console.log(getPreco.apply(produ02, [0.17, '$']))//contexto e array (parametros)