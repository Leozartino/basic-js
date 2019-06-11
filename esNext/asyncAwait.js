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

//O objetivo deste recurso é simplificar o uso de Promise
//Um código que parece muito mais sincrono.
//Sempre que eu estiver lidando com uma função que retorna uma Promise
//posso simplesmente por await e essa função só vai para o próximo passo se estiver
//resolvida ou se for rejeitada mostrando o erro
let obterAlunos = async () => {
  const turmaA = await getTurma("A");
  const turmaB = await getTurma("B");
  const turmaC = await getTurma("C");
  return [].concat(turmaA, turmaB, turmaC);
}; //retorna um objeto do tipo AsyncFunction
//em cima desse objeto é que eu chamo a função para executar

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes));
