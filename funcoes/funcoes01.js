//Cidadão de primeira linha
/*
  Funções podem ser passadas como parametros, retornar uma função a partir de
  uma outra função, criar funções aninhadas.
  Criar funções de três formas: - Literal; - Armazenar em uma variavel e 
  - => function
*/
//Função criada de forma literal
function fazAlgo(a, b){
  return a + b;
};

//Armazenar uma função em uma variavel/constante
const soma = function (a,b){
  return a + b;
};
//Armazenar funções em um array
const arrayF = [function (a,b){
  return a + b;
}, soma, fazAlgo];

console.log(arrayF[2](3,5))
console.log(arrayF[0](5, 6))

//Armazenar em um atributo de objeto
objeto_exemplo = {
  linguagem: function (){
    return `au..au..au`;
  },
  peso: 45.78,
  pelo: 'Amarelo',
  saudacao:  () => {
    return 'Olá, olá';
  }
};

console.log(objeto_exemplo.saudacao()); /*Acessando a chave e o valor de "linguagem" 
                                  que é uma função, chamando a função e imprimindo
                                  no console.
                                  */
//Armazenando uma função em um objeto, cirando dinâmicamente uma chave e o valor.                                                                  
var obj = {};
obj.oi = function (){
  return 'Olá :)';
};
console.log(obj);
console.log(objeto_exemplo === global);
