console.log(this === global); //False!!, this aponta para module.exports
console.log(this === module); //this é um objeto, que é a referência de module.exports, mas nao é ele (so aponta)

console.log(this === module.exports); //SIM, mesma referência (no ambito mais global da coisa)
console.log(this === exports); //SIM, mesma referência (no ambito mais global da coisa)

//Em uma função, o this aponta também pra module.exports e exports??
function testandoThis(par) {
  console.log("O par passando o this externo:");
  console.log(par === exports); //como o parametro passado é o this que veio do escopo maior, é true
  console.log(par === module.exports); //como o parametro passado é o this que veio do escopo maior, é true tmb

  const self = this; //Já dentro de uma função o this não aponta para module.exports ou exports!!
  console.log(
    //Aponta para o "objeto global interno", por assim dizer!
    self === exports
      ? `O ${self} é igual ao exports`
      : `O ${self} interno é diferente do exports`
  );
  console.log(
    self === module.exports
      ? `O ${self} é igual ao module.exports`
      : `O ${self} interno é diferente do module.exports`
  );
  console.log("O this dentro uma função aponta para global?");
  console.log(self === global); //SIM xD
}

testandoThis(this);
