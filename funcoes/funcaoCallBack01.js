const marca = ['Mercedes', 'Audi','BMW'];

function imprimir(nome,indice){
  console.log(`${indice + 1}. ${nome}`)
};

marca.forEach(imprimir) //Callback

