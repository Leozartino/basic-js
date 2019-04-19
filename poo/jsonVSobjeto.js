//JSON - JavaScript Object Notation
//Basicamente, é um arquivo de dados que é utilizado para intercomunicação entre sistemas.
//Arquivo textual. Padrão de transferência de dados. Substituiu o XML.
//JSON.stringify() -> converte um objeto para o formato JSON.
//JSON.parse() -> converte o formato JSON para um objeto (em JS).
const objeto = {nome: 'Leonardo', idade: 22, genero: 'M'};
console.log(JSON.stringify(objeto));

const objetoComFunc = 
  {
  teste(){
  return 'Olá!';
  }, 
  nome: 'Objeto teste',
  numero: 2
  };

//JSON não carrega funções ou métodos com ele, somente dados que podem ser convertidos para string.
const formatoJSON = JSON.stringify(objetoComFunc);
console.log(formatoJSON);
//Convertendo o formato JSON para objeto com o .parse
console.log(JSON.parse(formatoJSON));

/*
 Alguns testes:
 o formato JSON esta no formato, ex: '{"a": 1, "b": 2, "c": 3}'
 Não é válido os seguintes exemplos para JSON: "{a: 1, b: 2, c: 3}" || "{'a': 1, 'b': 2, 'c': 3}"
 OU seja, o formato JSON o que seria a chave de um objeto deve estar entre aspas duplas, assim como toda a capsula do objeto.
 Para valores do tipo string deve - se utilizar as aspas duplas também.
 É possivel armazenar em um JSON => Objetos, arrays, strings, numéricos e valores booleanos. Não funções!
*/

console.log(JSON.parse('{"a": 5, "b": 6, "c": "Apenas um teste", "d": true, "e": [1,2,3,5], "f": {}}'))