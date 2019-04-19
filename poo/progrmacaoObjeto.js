//Classe é uma especie de forma, molde. Um modelo!
class Retangulo{
  constructor(altura, largura){
    this.altura = altura;
    this.largura = largura;
  }
  calculaArea(){
    return this.altura * this.largura;
  }
  get area(){
    return this.calculaArea();
  }
}
//Instanciar: gerar um objeto a apartir de uma classe.
//objetos criados a partir da chamada da classe, os objetos são feitos do molde e são independentes.

const quadrado01 = new Retangulo(4, 4);
const retangulo01 = new Retangulo(5.6, 6.2);

console.log(quadrado01.area);
console.log(retangulo01.area)



