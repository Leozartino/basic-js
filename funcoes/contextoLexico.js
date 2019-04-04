const valor = 'Global';

function minhaFuncao(){ //O contexto léxico da declaração foi dentro do módulo do node
   console.log(valor)
}
function exec(){
  const valor = 'Local';
  minhaFuncao();
}

exec();