/*
  Uma forma de ter encapsulamento no código, ou em valores de um objeto, por exemplo
  é "tornar" os atributos privados, e serem acessados somente por metódos getters e setters,
  de uma forma mais controlada. Não sendo dejesavel alterar diretamente o atributo (no atributo),
  pois em um alguns casos pode haver incosistência nas entradas, ou nos valores dos atributos, e isso
  pode gerar problemas nos dados.

  Em JavaScript não existe uma forma de dominnio privado, restringir da forma sintática
  Mas existe convenções para desenvolvedores.
*/

const sequencia = {
  _valor: 0, //o underline indica que o atributo é desejavel ser privado

}