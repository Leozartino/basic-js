//Filter => retorna para um novo array elementos de um array
//que satisfaça condições propostas na condicional!

const numeros = [5, 6, 7, 9, 10, 6, 12, 54, 32, 95, 75, 702];

const numerosPares = numeros
  .map(value => value * 3)
  .filter(value => value % 2 === 0);
console.log(numerosPares);

const produtos = [
  { nome: "Notebook", preco: 2700, fragil: true },
  { nome: "Copo de Vidro", preco: 5.75, fragil: true },
  { nome: "Caderno", preco: 17.98, fragil: false },
  { nome: "Ipad Pro", preco: 3900, fragil: true }
];

const produtosFrageis = produtos
  .filter(posObjeto => posObjeto.fragil && posObjeto.preco > 500)
  .map(posObjeto => `produto: ${posObjeto.nome} preco: ${posObjeto.preco} `);
console.log(produtosFrageis);
