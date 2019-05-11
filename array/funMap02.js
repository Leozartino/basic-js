const carrinho = [
  '{"nome":"Borracha", "preco": 15.8}',
  '{"nome":"Caderno","preco":1.90}',
  '{"nome":"Caneta","preco":2.75}',
  '{"nome":"Bloco de Notas","preco":7.25}'
];

const arrPrecos = carrinho.map(value => JSON.parse(value).preco);
console.log(arrPrecos);

//OU desta forma:

const converteJson = json => JSON.parse(json);
const pegaPreco = objeto => objeto.preco;

const arrDePrecos = carrinho.map(converteJson).map(pegaPreco);
console.log(arrDePrecos);
