//forOf
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetorIndices = new Array(numeros.length - 1);

let somaNumeros = 0;

for (valores of numeros) {
  somaNumeros += valores;
}
for (indices in numeros) {
  console.log(vetorIndices);
  vetorIndices[indices] = numeros[indices];
}

console.log(somaNumeros);
console.log(vetorIndices);
