const schedule = require("node-schedule");

//executando uma tarefa no servidor utilizando o node-schedule
//o temproizador pode ser útil caso precise ser feito uma rotina especifica
//em uma hora especifica. (Disparar um evento, ler um arquivo, fazer algo)
const tarefa1 = schedule.scheduleJob("*/5 * 14 * * 1", () => {
  console.log("Executando tarefa 01", new Date().getSeconds());
});
