
function makeFunc() {
  function printaAlgo(text){
    for( i = 0; i < text.length; i++){
      console.log(text[i])
    }
  } 
  return printaAlgo;
}

let primeiraChamada = makeFunc();
primeiraChamada('abcdefg')