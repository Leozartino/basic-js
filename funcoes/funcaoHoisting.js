const funcao = function () {

  var retornaValor = function () {
    return 1;
  }

  return retornaValor(); //Após o return, é feito a "saida" do escopo da função.
  //tudo que está "abaixo" do return ou não sofreu hoisting é ignorado.
  var retornaValor = function () { //Nesse caso a declaração sobe, mais a atribuição permanece
    return 2;
  } 
  
}
var a = funcao();
console.log(a)