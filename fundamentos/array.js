/*
    Em JavaScript o array é heterogêno, até porque a linguagem é fracamente tipada.
    Array flexível (JS).
    Para acessar um elemento do array, deve ser passado o índice correspondente do elemento 
    no array.
*/

const vetor = ['0' , 3, 't' , 8.3];
console.log(typeof vetor[2]);

var entrepreneurs = ["Oprah Winfrey", "Laurene Powell Jobs", "Arianna Huffington"];
 
// the line below will print the string "Oprah Winfrey"
console.log(entrepreneurs[0]);
 
// the code below will print the string "Arianna Huffington is the co-founder and editress-in-chief of The Huffington Post"
var bio = " is the co-founder and editress-in-chief of The Huffington Post";
console.log(entrepreneurs[2] + bio);


const numberArray = [0,2,3,5,6];
const variavelIsolada = numberArray.slice(-1);
console.log(variavelIsolada * 2)