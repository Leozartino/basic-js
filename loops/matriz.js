var matriz = [];

function insereNaMatriz(linhas, colunas, array){
  for(x = 0; x < linhas; x++){
    array.push([]);
    for(y = 0; y < colunas; y++){
      array[x][y] = Math.floor((Math.random() *1000) +1); //input do usuário
    };
  };
  return array;
}

console.log(insereNaMatriz(3,5,matriz));