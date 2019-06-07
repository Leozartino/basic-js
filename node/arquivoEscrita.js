const fs = require("fs");

const objetoProduto = {
  nome: "Celular",
  preco: 1249.99,
  desconto: 0.3
};

//Nosso objetivo aqui é persistir esse objeto no disco, salvar ele
//Como ele é um objeto precisamos converter esse objeto em um formato válido
//Pensou em algo? Isso mesmo: JSON, já que ele é uma especie de string

fs.writeFile(
  __dirname + "/arquivoGeradoObjeto.json",
  JSON.stringify(objetoProduto),
  err => {
    console.log(err || "Arquivo salvo com sucesso!!");
  }
);
