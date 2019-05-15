const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then(response => {
  const respotaServerDataFun = response.data;

  const funcionarioChina = respotaServerDataFun.filter(
    funcionarios => funcionarios.pais === "China"
  );
  const chinesas = funcionarioChina.filter(chines => chines.genero === "F");
  const funcionariaChinesaMenorSal = chinesas.reduce(
    (funcAnterior, funcAtual) =>
      funcAnterior.salario < funcAtual.salario ? funcAnterior : funcAtual
  );

  //console.log(funcionariaChinesaMenorSal);
  const { salario, nome, sobrenome, empresa } = funcionariaChinesaMenorSal;
  console.log(
    `A funcionaria com menor salario se chama ${nome} ${sobrenome}. Trabalha na empresa: ${empresa} e recebe ${salario}`
  );
});
