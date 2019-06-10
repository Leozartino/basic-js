const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");
const contadorC = require("./instanciaNova")(); //instanciaNova retorna uma função
const contadorD = require("./instanciaNova")(); //idem

//mexendo na mesma instância
contadorA.inc();
contadorB.inc();
console.log(contadorA.valor, contadorB.valor);
//mexendo em instâncias diferentes, pois estou utilizando uma factory
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
