//Função manipulando dados
//Dados que possuem funções (metódos)
//Objeto funciona como capsulas
let obj = {
  chave01: 'valor01',
  chave02: 'valor02',
  chave03: 'valor03' ,
  chave04: function (par){  
    return par;
  }
};

console.log(obj.chave04(52)); //invocando um processamento a partir do dado

