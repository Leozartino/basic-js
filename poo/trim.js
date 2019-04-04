inputReference = document.querySelector('input[id = input01]');
bottonReference = document.querySelector('button[id = botao1]');

//let entradas = []

bottonReference.onclik = function tratEspaco(){ 
  let valorDoInput = inputReference.value;
  let texto =  document.createTextNode(valorDoInput);
  alert(texto.trim());

}