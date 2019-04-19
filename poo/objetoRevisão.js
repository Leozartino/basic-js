//colecao dinâmica de pares chave/valor
const produto = new Object;

produto.nome = 'Cadeira';
produto['marca_do_produto'] = 'Generica';
produto['preco'] = 220;

console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua das Acalhas',
      numero: '123'
    }
  },
  // um chave com valor de array de objetos:
  condutores: [{
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 23
  }], 
  calValSeguro: function(){
    //...
  }
}
