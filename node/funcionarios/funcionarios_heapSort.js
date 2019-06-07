const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");
const hP = require("./heapSort"); //importando o código do arquivo com o sorting algothim
const heapSort = hP.heapSort; //chamo isso de gambiarra, atribuindo a fun de ordenação com um nome limpo

//O axios é um client http, ele é usado para obter informações
//de um servidor, de algo que esta remoto.
//ele envia uma requisição para um servidor

//1 - Nosso objetivo é obter um arquivo JSON que se encontra na url descrita acima
//utilizando o axios para enviar a request e obter uma response
//get envia a request, quando a requisição retornar é chamado o .then

//Desafio: Obtenha a mulher chinesa com menor salário do arquivo JSON retornado

axios.get(url).then(response => {
  const infoFuncionarios = response.data;
  let chinesaMenorSalario = null;
  let pessoaMenor = null;

  //obtendo somente as pessoas da china e mulheres, além de pegar só o salario
  const mulheresChinesas = infoFuncionarios
    .filter(pessoa => pessoa.pais === "China")
    .filter(pessoa => pessoa.genero === "F");
  const chSalarios = mulheresChinesas.map(fun => fun.salario);
  //chamando o heapSort para ordenar, isso permite que eu retorne o menor valor
  //pois como é ordenado em ordem crescente, o menor sempre estará na pos de  i = 0;
  heapSort(chSalarios);
  chinesaMenorSalario = mulheresChinesas.filter(
    funcionaria => funcionaria.salario === chSalarios[0]
  );
  return console.log(chinesaMenorSalario);
});
