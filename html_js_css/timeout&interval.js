
let funFazALgo = () => {
  console.log(`Valor: ${8}`);
};

setInterval(funFazALgo, 2000); //Chama uma função a cada milísegundo definido

let outraFazAlgo = () => {
  var [a, b ,c] = [5, 6, 11];
  c = c + (a + b);
  console.log(c);
};

setTimeout(outraFazAlgo, 2000); //Chama uma função após um intervalo (milisegundo)

