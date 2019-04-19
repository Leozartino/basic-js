const pessoa = {
  nome: 'Leo',
  idade: 22,
  peso: 54
}

let copiaPessoa = {};

//console.log(Object.keys(pessoa));//printando todas as chaves do objeto pessoa.
//console.log(Object.values(pessoa));//pritando todos os valores do objeto pessoa.
//console.log(Object.entries(pessoa))//printa arrays de chaves-valor, uma lista de par chave-valor.

const arrayDeObjetos = Object.entries(pessoa);
/* for (x = 0; x < arrayDeObjetos.length; x++){
  for(y = 0; y < arrayDeObjetos[x].length; y++){
    console.log(arrayDeObjetos[x][y])
  }
}; */

arrayDeObjetos.forEach(([chave, valor]) => copiaPessoa[chave] = valor ); //acessa o array interno e retorna as posições chave-valor
console.log(copiaPessoa, pessoa);
//arrayDeObjetos.forEach(elemento => {console.log(`${elemento[0]}: ${elemento[1]}`)});

//Metódo para definir paramêtros mais completos para um objeto.
Object.defineProperty(pessoa, 'dataDeNac',{
  enumerable: false,
  writable: false,
  value: '15/10/1996'
});

pessoa.dataDeNac = '15/10/2005';

console.log(pessoa.dataDeNac);

//Object.assing -> EcmaScript 2015
const dest = {a: 1, b: 2};
const o1 = {c: 3, d: 4};
const o2 = {e: 5, f: 6};

const obj = Object.assign(dest, o1, o2);

console.log(obj);