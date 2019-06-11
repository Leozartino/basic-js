//constuir uma função que fará um parser em todas as variaveis
//interporladas e aplicar uma mascára de "dinheiro"

function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}

const preco = 300.4;
const precoParcela = 150.2;
console.log(real`1x de ${preco} ou 2x de ${precoParcela}`);
