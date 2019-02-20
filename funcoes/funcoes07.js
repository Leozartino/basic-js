//Arrow function 
//Função reduzida e this associada a ela.

let dobro = function (a) {
  return a * 2;
};

console.log(dobro(5));

//Caso queira chama-la, deve ser usado uma var, const ou let e atribula ao seu id.
dobro = a => a * 2;  //arrow function is always anonymous 
    //caso tenha apenas um parametro e retirando as chaves, o retorno é implicito
    
    console.log(dobro(5))

const saudacao = () => 'Olá' //return implicito
const b = saudacao() //armazenando na variavel a chamada da funçao saudacao.
console.log(b)//imprimindo no console o valor da variavel b que é uma chamada.

const f = _ => 'Teste'; //único parametro 
console.log(f())