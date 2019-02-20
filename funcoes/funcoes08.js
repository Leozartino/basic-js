const Pessoa = function () {

  this.idade = 0;
  setInterval(() =>{
    console.log(this.idade++)
  },1002)
}

new Pessoa;

//Aparatemente não é possivel chamar o construtor a patir de uma arrow fun
