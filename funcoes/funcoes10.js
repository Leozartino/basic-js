var vetor = '1010'
var k = vetor.length - 1
var sum = 0

for (i = 0; i < vetor.length; i++){
  sum = sum + (vetor[i] * (2**k))
  k = k - 1
}
console.log(sum)