//importando o módulo global.js que possui a "exportação" de coisas que foram alocadas no objeto global
//essas coisas são atributos do objeto global.
require("./global"); //estou simplemeste carregando o módulo exportado
//requerendo apenas uma vez, todos os outros módulos do diretório vao enchergar o que foi posto no objeto global
//fica disponivel na aplicação inteira

//Aqui eu salvo os atributos exportados a partir do objeto global em uma constante/var
//Inicialmente para não ter que usar o algoExportado.atributoExportado, deixando mais clean a utilização posterior
//Porém, desta forma eu posso garantir que não será alterado os atributos exportados, sejam eles funções, objetos, arr e etc
//(desde que eu mexa somente nessas var/constantes declaradas).
const soma = util.soma;
const arrObjetos = util.arrObjetos;
const sauda = util.sauda;

console.log(soma(3, 5));
console.log(arrObjetos);
console.log(sauda());

//mexendo nos atributos globais
util.sauda = function() {
  return "Saudação, amigo! Se você vê esta mensagem provavelmente eu mudei algo xD";
};

console.log(util.sauda()); //imprimi o returno alterado dinâmicamente no objeto global!!
console.log(sauda()); //aqui ainda é impresso a mensagem de saudacao inicialmente definida, ja que foi armazenda em uma var (seu estado naquele momento)

//CUIDADO AO POR ALGO NO WINDOW (BROWSER) ou NO GLOBAL (SERVIDOR,BACKEND), ELE PODE SER ALTERADO A PARTIR DO MOMENTO QUE É IMPORTADO
