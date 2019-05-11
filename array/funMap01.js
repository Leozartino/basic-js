/* Map => A ideia é mapear o array para outro array de memso tamanho
          com os dados transformados!
Map que pega um objeto e transforma em um número
Map que pega array de JSON e transformar em um array de objetos
Map tranforma um array em outro. */

const numeros = [5, 6, 7, 8, 9, 10];
let novosNumeros = new Array();
console.log(novosNumeros);
//mapeando o array passando para o novo arr os elementos transformados
novosNumeros = numeros.map(value => value * 2);
console.log(novosNumeros);

const soma = elemtno => elemtno + 10;
const sub = ele => (ele - 10) * 2;
const paraDinheiroReal = elemento =>
  `R$ ${parseFloat(elemento)
    .toFixed(2)
    .replace(".", ",")}`;
//as funções callback deve ter as mesmas características do que é esperado em um map.
let arr = numeros
  .map(soma)
  .map(sub)
  .map(paraDinheiroReal);
console.log(arr);
