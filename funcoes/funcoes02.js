function soma (){//Função sem parametros, mas pode ser recuperado a partir de arguments
  s = 0;
  for(i in arguments){ //argumentens é uma especie de 'guarda variaveis' do limbo das funções.
    s += arguments[i]; //acessando no loop o vetor arguments na posição i
  }
  return s;//retorno da soma.
};
console.log(soma(3,3,6,9))
