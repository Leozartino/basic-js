//Cuidado com o objeto global
//Coisas que estão no objeto global podem ser modificadas por qualquer módulo de um mesmo diretório.
//É uma especie de objeto compartilhado global
global.util = {
  soma(a, b) {
    return a + b;
  },
  arrObjetos: [{ a: 2, b: 3 }, { a: 5, b: 4 }],
  sauda() {
    return "Estou em todos os lugares!!";
  }
};
