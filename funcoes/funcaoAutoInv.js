// IIFE - Immediately Invoked Function Expression
//Definir constantes variaveis, funções, objetos e etc e isso não "toca" no escopo global

(function (){
  console.log('Será executado na hora!')
  console.log('Foge do escopo mais abrangente.')

})()