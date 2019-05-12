//Em vez de ficar usando alternado, salvando e executando npm start ou o node em si
//há uma alternativa chamada nodemon, ele fica ouvindo os arquivos js e sempre
//restarta quando há alterações salvas na aplicação
//exetucando no terminal: nodemon aplication.js
//ele é um watcher

const _ = require("lodash");
setInterval(() => console.log(_.random(5, 10)), 2000);

//Tudo que é instalado através do comando npm -i está dentro da pasta node_modules
//yarn add tmb, provavelemnte xD
//Quando é rodado o comando npm -i, se caso ja existir um package.json com conteúdo
//o npm irá buscar as referências do .json e instalará com base no seu conteúdo.
