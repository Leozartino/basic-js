const [a, b, c] = [5, 6, 8]; //Criando variáveis a partir do operador destructuring

const obj01 = {a, b, c};//criando um objeot e atribuindo atribuindo o par chave e valor a partir das constantes.
console.log(obj01);

const [nomeAtr, valorAtr] = ['nota', 7.0];

const obj02 = {};
obj02[nomeAtr] = valorAtr;
console.log(obj02);

const obj03 = {
  funcao: function(){

  },

  chaveValor(){ //nova notação para definir uma função dentro de um objeto.

  }
};


console.log(obj03);