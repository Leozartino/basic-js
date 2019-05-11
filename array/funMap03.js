//Implementação do map, adcionando a partir do prototype
Array.prototype.map2 = function(callback) {
  const novoArray = new Array();
  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i], i, this));
  }
  return novoArray;
};

const carrinho = [
  '{"nome":"Borracha", "preco": 15.8}',
  '{"nome":"Caderno","preco":1.90}',
  '{"nome":"Caneta","preco":2.75}',
  '{"nome":"Bloco de Notas","preco":7.25}'
];

const carrinhoPreco = carrinho.map2(value => JSON.parse(value).preco);
console.log(carrinhoPreco);
