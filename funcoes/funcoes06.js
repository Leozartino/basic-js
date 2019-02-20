const Person = function () {
  //No momento que for criado um objeto a partir dessa função
  //o atributo idade estara diponivel
  //Atributo idade diponivel, público? Para instâncias sim
  this.idade = 0; 
  const self = this;
  setInterval(function (){
    self.idade++
    console.log(self.idade)
  },1001);

};

Conta = new Person;
Conta

