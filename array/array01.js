//É interessante usar arrays considerandos eles de um só tipo;
console.log(typeof Array, typeof new Array(), typeof []);
const arr = new Array("Bia, ", "Ana", "Carlos", "Lucas");
console.log(arr);

//removendo o elemento contido no indice 1 e aprtir do indicie 1
//remover 2 elementos retornando o array (sobrescrevendo - o);
arr.splice(1, 2);
console.log(arr);

const arr01 = [15, 25, 35, 6];
const arr02 = arr01.splice(1, 2);
console.log(arr02);
