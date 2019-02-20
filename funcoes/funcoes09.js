let comparaTHis = function (par){
  console.log(this === par) //nesse contexto lex o this não é o this- Leitão, Leonardo
}

comparaTHis(module.exports) 
//Arrow function não altera a referência do seu this, ele sempre vai apontar
//para o "objeto" ao qual a função foi escrita inicialmente 
let comparaThisArrow = (par) =>{
  console.log(this === par) //Neste contexto o this é ele mesmo
}
const objeto = {};
comparaThisArrow(module.exports) 
//Usando a função bind para tentar mudar a referência do this
comparaThisArrow = comparaThisArrow.bind(objeto);
comparaThisArrow(objeto)