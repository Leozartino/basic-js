module.exports = function(callback) {
  console.log("Executando uma callback de forma síncrona: ");
  callback("Isto é uma string teste!", 25);
};
