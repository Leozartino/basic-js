//Compara valores, mesmo quando são tipos diferentes. ==
const valor1 = 32;
const valor2 = '32';

const resultado = (valor1 == valor2);
console.log(resultado);//true

//Compara valores e se são do mesmo tipo, retornando false ou true.

const r = (valor1 === valor2); //um é number e outro é string
console.log(r); //false

const a = 325;
const b = '325';

const re = (a !== b); //a é estritamente diferente de b ? SIM, apesar de possuir valores iguais são de tipos diferentes
console.log(re);

//Apesar de as duas variaveis possuirem valores iguais, tem endereços de memória diferente.
const d1 = new Date(0); //d1 armazena um endereço de memória (Date)
const d2 = new Date(0); // d2 armazena um endereço de memória (Date)
res = (d1 == d2);
resu = (d1 === d2);
console.log(res);
console.log(resu);

// Agora é passado para a variavel resul a comparação do valor number de d1 e d2, estes são iguais.
resul = (d1.getDate === d2.getDate);
console.log(resul);
