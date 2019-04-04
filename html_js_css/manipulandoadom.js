/*
  É possivel buscar informações através da manipulação de elementos da DOM
  no Javascript, ou seja, é possivel disparar eventos por exemplo utilizando
  referências de elementos do HTML no Script.
*/

let inputElement = document.createElement('input'); //Criei um elemento input
//POrém, ele está no limbo, não está sendo referenciado (não tem casa) em lugar algum no arquivo html.
let divReferencia = document.querySelector('#app'); //Armazena a referência da div na variabel

//Setando os atributos do Input
inputElement.setAttribute("name", "NomeDoInput");
inputElement.setAttribute("placeholder", "InputAqui");

//Adcionando a referencia da div existente no documento HTML o input devidamente criado e setado no Script.
divReferencia.appendChild(inputElement);

let buttonRef = document.getElementById('23')
let recupInput = () => {
  var texto = inputElement.value;
  alert(texto);
}
buttonRef.onclick = recupInput;// Se você usar os parênteses, isso indica ao Script
                            // uma chamada de função, ou seja, ele irá chamar a
                            // função de  qualquer lugar, não importa onde.


// getElementsById -> retorna um único elemento
// getElementsByTagName -> retorna um vetor (HTML COLLECTION), deve ser passado a posição do elemento [0]
// getElementsByClassName -> retorna um HTML COLLECTION 

// querySelector -> Percorrer a DOM até encontrar o elemento.
