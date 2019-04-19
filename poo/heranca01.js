const ferrari = {
  modelo: 'F40',
  velMax: 324
};

const volvo = {
  modelo: 'V40',
  velMax: 200
};

console.log(ferrari.__proto__);//Acessando o protótipo do objeto ferrari.
console.log(ferrari.__proto__ === Object.prototype);

//UM objeto em JavaScript tem uma referência para o seu protótipo (herança).
//A partir da referência para o seu protótipo é possivel ter uma referência de outro objeto.
//Posso ter atributos que não esta definidos internamente no objeto filho e ele pode procurar no objeto pai a referência.
//Caminhando na cadeias de protótipos até achar a referência.
