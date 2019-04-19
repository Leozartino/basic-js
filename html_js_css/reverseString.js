/*
  Exercício 1: Teste de sintaxe
  Trata-se de criar um método reverse para strings.
*/

olReference01 = document.querySelector("#olFirst ol");
inputReference01 = document.getElementById("In01");
bottonReference01 = document.getElementById("Btn01");

let vetorDePalavras = [];

//Função que retorna a string inversa
const reverseString = palavraNormal => {
  let palavraInversa = "";
  for (let j = palavraNormal.length - 1; j >= 0; j--) {
    palavraInversa = palavraInversa + palavraNormal[j];
  }
  return palavraInversa;
};

const renderInversas = () => {
  olReference01.innerHTML = "";
  for (p of vetorDePalavras) {
    let liElment = document.createElement("li");
    //além de atribuir o valor texto, é chamado a função reverseString e jogando para minusculo.
    let textElement = document.createTextNode(reverseString(p.toLowerCase()));
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    let textoLink = document.createTextNode("  Excluir");

    let posicaoArray = vetorDePalavras.indexOf(p);
    linkElement.setAttribute("onclick", "deletString(" + posicaoArray + ")");

    linkElement.appendChild(textoLink);
    liElment.appendChild(textElement);
    liElment.appendChild(linkElement);
    olReference01.appendChild(liElment);
  }
};

//Adcionando as palavras do input, quando o evento: "cliclar no botão" é acionado.
bottonReference01.onclick = () => {
  let recupTexto = inputReference01.value;

  vetorDePalavras.push(recupTexto);
  inputReference01.value = "";
  renderInversas(); //chamando a função para renderizar em tela as strings inversas
};

function deletString(posAR) {
  vetorDePalavras.splice(posAR, 1);
  renderInversas();
}
