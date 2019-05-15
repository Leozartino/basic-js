//Módulo filesystem é um mod interno do node, assim como o http
const fs = require("fs");
//__dirname significa diretorio atual
const caminho = __dirname + "/arquivo.json"; //simplifica o caminho do arquivo
//e deixa seguro no momento da leitura, pois independente de onde eu coloque ele ira pegar do diretorio atual (seja ele qual for)

//ler um arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//leitura assincrono
fs.readFile(caminho, "utf-8", (err, cont) => {
  const config = JSON.parse(cont);

  console.log(`${config.db.host}:${config.db.port}`);
});
