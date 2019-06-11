//ES8: Object.values, Object.entries (chave-valor);

const objetoGenerico = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

console.log(Object.values(objetoGenerico));
//cada chave-valor do objeto sera posto em um array único dentro de um maior (matriz)
console.log(Object.entries(objetoGenerico));

//Melhorias na notação literal

const nome = "Leo";

const usuario = {
  nome,
  ola() {
    return "Olá, " + this.nome;
  }
};

console.log(usuario.nome, usuario.ola());
