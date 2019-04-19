//Adcionando ao prototype de String.
String.prototype.reverse = function(){
  return this.split('').reverse().join('')
}

var string = ['leonardo'];
console.log(string[0].reverse())