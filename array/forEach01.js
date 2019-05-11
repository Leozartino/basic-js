//forEach é uma outra forma de laço especifico
//Pode servir para extrair atributos de um determinado objeto, operações mat e etc
//O forEach pode percorrer o array com um pouco mais de proposito

const aprovados = ["Bia", "Carlos", "Jamuly", "Maria", "Jonas"];
const numeros = [5, 4, 8, 9, 7, 10];

function insereNoVetorDividindo(arrOrigem, tamArray, coeficiente) {
  //setando o array com n espaços em branco e com seus índices associados
  //os espaços em branco estão diretamente associados ao tamanho do arrOrigem
  //pois no momento da atribuição isso garante que para cada indice do novo vetor
  //terá um valor associado a ele como resultado.
  let arrDestino = new Array(tamArray);
  //Este for ira iterar até o valor do tamano do array passado no parametro da função
  for (let i = 0; i < tamArray; i++) {
    //o arrDestino vai receber na posição do indice o elemento do arrOrigem na mesma pos
    //divindo pelo coeficiente passado no parmetro
    arrDestino[i] = arrOrigem[i] / coeficiente;
  }
  //ao final da iteração é retornado o arrDestino com os valores setados
  return arrDestino;
}
console.log(numeros);
//Funções não são destrutivas (na maioria dos casos), ao menos as que o dev cria durante a codificação
insereNoVetorDividindo(numeros, numeros.length, 2);
console.log(numeros);
//dentro do forEach é passado um callbackfc(value, index)
aprovados.forEach((elemento, index) => elemento + " : " + index);

const arr = [[2, 3], [5, 6], [7, 2]];
const mik = 2;

/* arr.forEach(linha => linha.forEach(coluna => ab.push(coluna / mik)));
console.log(ab); */

//Outra possibilidade é armazenar uma função em uma variavel e passar no
//parametro do forEach
//No entanto a função armazenada deve possuir características do que é esperado
//em um forEach => três parametros (elemnto, index, array)

/* const foo = elemt => console.log(elemt / 2);
numeros.forEach(foo); */

let arr03 = [];
numeros.forEach((elemento, indice, array) => (array[indice] = elemento / 2));
arr03 = numeros;
console.log(arr03);
