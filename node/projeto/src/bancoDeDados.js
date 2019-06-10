//Objeto sequência para pegar o ID dos objetos que quero persisitir
const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  }
};

const produtos = {};

function salvarProduto(produto) {
  if (!produto.id) {
    //como o que é retornado é um método get, é chamada o incremento do valor de id
    produto.id = sequence.id;
  }
  produtos[produto.id] = produto;
  return produto;
}

function getProduto(id) {
  return produtos[id] || "Produto não encontrado!";
}

function getTodosProdutos() {
  return Object.values(produtos);
}

function deleteProduto(id) {
  delete produtos[id];
  return `O produto deletado foi de id: ${id}`;
}

module.exports = {
  salvarProduto,
  getProduto,
  getTodosProdutos,
  deleteProduto
};
