/* const x = 'GLobal'

function fora (){
  const x = 'LOcal';
  function dentro(){
    return x ;
  }
  return dentro;
}
let firstCall = fora()
let secondCall = firstCall()
console.log(`Printando a variavel x = ${x}`)
console.log(`Printando a varável x a patir das chamadas das funções: x = ${secondCall}`) */
 
function makeFunc() {
  function printaAlgo(text){
    for( i = 0; i < text.length; i++){
      console.log(text[i])
    }
  } 
  return printaAlgo;
}

let primeiraChamada = makeFunc();
primeiraChamada('abcd')


/*  function teste(){
  return function testeDentro(text){
    for(i = 0; i < text.length; i++){
        console.log(text[i])
    }
  }
}

let primeiraChamada = teste();
primeiraChamada('abcdef')  */