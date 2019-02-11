const peso1 = 1.1;
const peso2 = Number('2.0'); // o metodo Number é semelhante ao que se tem Java para conversão de string em tipo númerico

console.log(Number.isInteger (peso1));
console.log(typeof peso2);

const av1 = 8.7;
const av2 = 5.05;

const media = ((av1 + av2)/2);

console.log(media.toFixed(2)); //toFixed, método para vizualar casas decimais de um numero (arredonda).

/*
    Um tipo de dado possui 'funções' associadas a ele, um tipo number possui funções assim como um tipo string também possui.
    Nota: Observe que metódos não alteram diretamente o valor de uma váriavel sem atribuir a essa váriavel, 
    o que é feito são apenas uma manipulação.
*/