const pai = {nome: 'Pedro', corCabelo: 'preto'};
const filha = Object.create(pai);
filha.nome = 'Ana';

const filha02 = Object.create(pai, {
  nome :{value: 'Julia',
  enumerable: true,
  writable: false}
})
console.log(filha02.nome)
filha02.nome = 'Karla';
filha02.idade = 15;
console.log(filha02)

for(let key in filha02){
  //hasOwnProperty retorna true para o parametro passado se o atributo pertence ao objeto em questão
  //Se não, isso significa que ele veio da cadeia de prototipos por meio de herança.
 filha02.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
}