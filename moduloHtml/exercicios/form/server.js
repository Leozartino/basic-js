const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/*
  Dados enviados pelo body em uma req do tipo POST
  Dados enviados via query em uma req do tipo GET (n faça isso)

*/

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.send("<h1>Usuário cadastrado!<h1/>");
});

app.post("/usuarios/:id", (req, res) => {
  console.log(req.params.id);
  console.log("<h1>Usuário alterado!<h1/>");
});

app.listen(3003);
