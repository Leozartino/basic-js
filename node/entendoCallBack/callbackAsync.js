module.exports = function(callback) {
  console.log("Executando uma callback de forma assíncrona:");
  setTimeout(() => {
    callback("Isto é uma string teste!", 25);
  }, 4000);
};
