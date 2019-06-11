//Promisse consegue composição de uma forma mais interessante
//Obter três arquivos JSON de alunos
//A promise favorece mais o processamento asycnrono
//axios é baseado em promisses o http não xD

const http = require("http");

//essa callback será chamada quando o arquivo JSON estiver totalmente carregado
const getTurma = (letraID, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letraID}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = "";

      res.on("data", dados => {
        resultado += dados;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (erro) {
          reject(erro);
        }
      });
    });
  });
};

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))
  .catch(erro => console.log(erro.message));
