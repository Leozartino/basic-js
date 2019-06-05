const funcaoGenericaTesteSync = require("./callbackSync");
const funcaoGenericaTesteAsync = require("./callbackAsync");

console.log("Executando o inicío do código");
funcaoGenericaTesteAsync((string, number) => {
  string += " Além disso, estou concatenando aqui haha";
  number += 1;
  console.log(string);
  console.log(number);
});
console.log("Executando o fim do código");

/* funcaoGenericaTesteSync((string, number) => {
    console.log("A string tem: " + string.length + " caracteres");
    console.log(number + 9);
  });
  console. */
