//Função que retorna um objeto

function criaProduto (nome, preco, p_desconto = preco - (preco * 0.3)){
  return {
  nome,
  preco,
  p_desconto
  }
}

const p1 = criaProduto('Caneta_Bic', 190);
console.log(p1)

//Funcção Factory (retorna objetos com os atributos listados)
function criaObjeto (nome, preco, desconto = 0.2) {
  return {nome,preco, desconto}
};

const prod01 = criaObjeto('Panela', 35.45, 0.3);
const prod02 = criaObjeto('Copo Americano', 15.55, 0.1);
//Usando o operador destructuring para retirar apenas os atributos desejaveis.
const {nome: nomeP01} = prod01;
const {preco: precoP02, desconto: descontoP02} = prod02;

console.log('O nome do produto 01 é: ' + nomeP01);
console.log('O preco do produto 02 é: ' + precoP02 + ' Seu desconto é de: ' + descontoP02);

