//Implementação o forEach, adcionando a partir do prototype
function forEach2(funCall) {
  for (let i = 0; i < this.length; i++) {
    funCall(this[i], i, this);
  }
}
Array.prototype.forEach2 = forEach2;

let vetorNumeros = [5, 3, 7, 8, 9, 10, 52, 7, 6, 12];

vetorNumeros.forEach2((valor, indice, arr) => (arr[indice] = valor * 2));

console.log(vetorNumeros);
