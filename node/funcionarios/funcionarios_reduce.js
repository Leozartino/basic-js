const axios = require("axios"); //cliente HTTP (faz requisições)
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const heapSort = require("./heapSort").heapSort;

//verbo get obtém uma informação do servidor
//quando a requisição retornar, é chamado o método then
//obtendo o contéudo do arquivo, criando a função que recebe como parm a resposta
//da requisição, armazeno em uma constante a resposta filtrando somente a informação
//do arquivo obtida. (JSON)
axios.get(url).then(response => {
  const funcionarios = response.data; //dentro do atributo data tenho meus funcionarios
  //console.log(funcionarios);
  const funcionariasChinesas = funcionarios
    .filter(funcionario => funcionario.pais === "China")
    .filter(funcionario => funcionario.genero === "F");

  const salarioChinesas = funcionariasChinesas.map(
    funcionarias => funcionarias.salario
  );

  const mulherChinesaMenorSalario = funcionariasChinesas.reduce(
    (funcionariaAnterior, funcionariaAtual) => {
      return funcionariaAnterior.salario < funcionariaAtual.salario
        ? funcionariaAnterior
        : funcionariaAtual;
    }
  );

  console.log(mulherChinesaMenorSalario);
});
