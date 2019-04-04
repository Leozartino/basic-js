var idade = 22;

var retorno = 
(isNaN(idade) === false ) ? `Pessoa tem ${idade} anos de idade` : 'Sem idade definida';

var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

for (usuario of usuarios){
    console.log(`O ${usuario.nome} tem habilidades: ${usuario.habilidades.join(", ")}`)
}

