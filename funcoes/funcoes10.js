var binario = '1010111'
var k = binario.length - 1
var sum = 0

for (i = 0; i < binario.length; i++){
  sum = sum + (binario[i] * (2 ** k))
  k = k - 1
}
console.log(sum)