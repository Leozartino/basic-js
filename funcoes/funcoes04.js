
console.log(sum(3,2)) //chamada antes de sua criação de fato.
//Função que não é armazenada em uma variavel sofre hoisting.
function sum (a,b) { 
  return a + b;
};


/*
Não sofre hoisting, caso seja chamada antes de sua delcaração é acusado
erro, neste exmplo: sub is not defined.
*/

var sub = function (a,b){ 
  return a - b;
};
console.log(sub(3,2))
