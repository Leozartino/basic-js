//Arrow Functios

const soma = (valor01, valor02) => valor01 + valor02;
const retornaString = string =>
  typeof string === "string" ? string : "Não é um valor de uma string";
console.log(soma(5, 10));
console.log(retornaString("Leonardo"));

//Parametro default

function log(texto = "Sample Text") {
  return texto;
}

console.log(log());

//Operador REST/SPREAD

function foo(...numeros) {
  let total = 0;
  numeros.forEach(elementoArray => (total += elementoArray));
  return total;
}
console.log(foo(5, 6, 10));

const arrayNumeros = [5, 6, 7, 8, 9];
const [x, y, ...numerosResto] = arrayNumeros;
console.log(x, y, numerosResto);
