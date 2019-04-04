function Carro (velecidadeMax = 200, delta = 5){ //Função construtora, como a classe ela é um molde e pode ser instanciados objetos a partir dela.
  //atributo privado
  let velecidadeAtual = 0

  //metodos público
  this.acelarar = function () {
    if (velecidadeAtual + delta <= velecidadeMax ){
      velecidadeAtual += delta;
    }
  else{
    velecidadeAtual = velecidadeMax;
    };
  }

  // metodo público
  this.getVA = () => {
    return velecidadeAtual;
  }
};

const fiat = new Carro();
fiat.acelarar();
console.log(fiat.getVA())

const ferrari = new Carro(350, 20);
ferrari.acelarar();
ferrari.acelarar();
ferrari.acelarar();
console.log(ferrari.getVA())
