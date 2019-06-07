//Uma factory retorna um novo objeto
module.exports = function() {
  return {
    valor: 1,
    inc() {
      this.valor++;
    }
  };
};
