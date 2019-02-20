function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    console.log(
      "O " +
        usuario.nome +
        " possui as habilidades: " +
        usuario.habilidades.join(", ")
    );
  }
}

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript"/*, "ReactJS", "Redux"*/]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

exibeHabilidades(usuarios);
//Vetor de objetos
var vetObj = [{nome: 'algo', hab: 'algo'}, {nome: 'algo', habi: 'algo'}]

console.log(vetObj[0].nome)