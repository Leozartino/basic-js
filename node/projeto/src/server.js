//Quando for pretendido executar alguma aplicação que tem comunicação com a rede
//será necessário declarar uma porta.
const port = 3003;
const bancoDeDados = require("./bancoDeDados");
const bodyParser = require("body-parser");
//Porta é uma associação de ID com um processo no computador que esteja comunicando
//com a rede,além disso ela é única por processo.
//Uma porta é uma especie de endereço de processo, uma especie de sala
//onde as requisições e tudo o mais vao transitar para aquele processo descrito
//por exemplo, um mesmo processo nao pode utilizar a mesma porta a nao ser que
//eles sejam diretamente relacionados, sejam do mesmo processo
//Mesmo que seja da aplicação, somente um único processo pode ocupar a mesma porta
/*
O propósito das portas é para singularmente identificar aplicações e processos de um único computador
 e assim possibilitá-los a compartilhar uma única conexão física
 com uma rede de comutação de pacotes, como a internet.
*/
//importando o express: micro-framework para implementar servidores
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res) => {
  //ao acessar a url /produtos, é retornado todos os produtos cadastrados.
  res.send(bancoDeDados.getTodosProdutos());
});

app.get("/produtos/:id", (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id)); //função send envia uma resposta
});

app.put("/produtos/:id", (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto);
});

app.delete("/produtos/:id", (req, res) => {
  res.send(bancoDeDados.deleteProduto(req.params.id));
});

app.post("/produtos", (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto); //JSON
});

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
