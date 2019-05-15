//Um padrão de projeto é uma solução para um problema recorrente!
//Especialistas criam uma soulção que se adeque ao problema recorrente
//Padrão Middleware : cadeia de responsabilidades
//É útil na reutilização de código, pois as responsabilidades funcionais
//não ficam restritas uma uma rotina ou algo do gênero

const passo01 = (contexto, next) => {
  contexto.vl01 = "md1";
  next();
};

const passo02 = (contexto, next) => {
  contexto.vl02 = "md2";
  next();
};

const passo03 = contexto => (contexto.vl03 = "md3");

const exec = (contexto, ...middlewares) => {
  //função para executar cada passo no indice, pois é um array (middlewares)
  const exec_passo = indice => {
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](contexto, () => exec_passo(indice + 1));
  };
  exec_passo(0);
};

const ctx = {};
exec(ctx, passo03, passo01, passo03);
console.log(ctx);
//No express, a funcção middleware possui três parametros: request, response e next;
