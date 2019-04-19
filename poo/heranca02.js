//Cadeia de prototipos (prototype chain)
Object.prototype.atrr0 = '0'; //Não faça isso em casa!

const avo = {atrr1: 'A'};
const pai = {__proto__: avo, attr2: 'B'};
const filho = {__proto__: pai, attr3: 'C'};

console.log(filho.atrr0, filho.atrr1, filho.attr2, filho.attr3)

const carro = {
  velAtual = 0,
  velMax = 200,
  aceleraMais(delta){
    if (this.velAtual + delta <= this.velMax){
      this.velAtual = this.velAtual + delta;
    }
    else{
      this.velAtual = this.velMax;
    }
  },
  status(){
    return `${this.velAtual}Km/h de ${this.velMax}`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 //shadowing
}
const volvo = {
  modelo: 'V40',
  status(){
    return `  ${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
