//O postman pode nos possibilitar fazer requisições de uma forma mais flexível
const porta = 3003;

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
const express = require("express");
const bancoDeDados = require("./bancoDeDados");
const app = express();
const produto01 = {
  nome: "Notebook",
  preco: 1892,
  fragil: true,
  desconto: 0.3
};
//Através dos métodos .get, .post e etc podemos passar a definição das rotas
//isso  quer dizer que a partir das requisições .get . post ele irá pegar
//das rotas escritas, implementdas na aplicação
app.get("/produtos", (req, resp, next) => {
  resp.send(bancoDeDados.getProdutos()); //Vai converter para JSON no momento da resp
});

app.get("/produtos/:id", (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});
//Quando se usa o .use, signifa que para todas as requisições o servidor
//irá retornar aquela resposta implementada, independete da rota passada do endereço.
//Segue o exemplo abaixo

app.use((req, resp, next) => {
  resp.send({ test: "Para todas as rotas!!" });
});

app.listen(porta, () =>
  console.log(`Servidor está executando na porta: ${porta}`)
);
