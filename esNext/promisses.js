//Promisse é um objeto usado para processamento assíncrono. Um Promisse
//representa um valor que pode estar disponível agora, no futuro ou nunca

//Promisse ser resolvida => promessa cumprida
//Promisse rejeitada -> promessa não cumprida

//Digamos que se queria acessar um arquivo que está remoto, podemos utilizar
//uma callback, para quando for obtido o arquivo é obtido um arquivo (callback de sucesso)
//quando não for conseguido acessar o arquivo é obtido uma callback de erro.

const falarDepoisDe = (segundos, frase) => {
  //o parametro "resolve" é uma função que será chamada
  //a promessa for atendida
  //o resolve aceita um único parametro (objetos podem ser uma alternativa para mais de um valor)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
};

//Para acessar o resolve, utiliza-se o .then para obter o resultado do processo atendido
//posso encadear .then sempre que terminar um o resultado do anterior passa para o proximo
falarDepoisDe(3, "Testando isso aqui, bro :>")
  .then(frase => frase.concat(" !!!"))
  .then(outraFrase => console.log(outraFrase))
  .catch(erro => console.log(erro));
