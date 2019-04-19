//Outra forma de pegar uma string de trás pra frente
let palavraInverse = (string) =>{
  let palavraFinal = [];
  let a = string.length - 1
  for(i = 0; i < string.length; i++){
    palavraFinal.push(string[a])
    a-=1
  };
  palavraFinal = palavraFinal.join('');
  return palavraFinal;
;}

console.log(palavraInverse('leonardo'));
