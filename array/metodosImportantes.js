//Semelhante ao comportamento para objetos constantes, arrays constantes podem ser
//modificados de forma interna, manipulando seus indices a partir do array atribuido
//isso inclui adcionar novo itens ao array, fazendo ele crescer ou diminuir conforme
//dependendo da situação.

const pilotos = ["Vetel", "Alonso", "Raikkonen", "Massa"];

pilotos.pop(); //remove item da ultima pos
pilotos.push("Qualquer"); //insere item na ultuma pos
pilotos.shift(); //remove item da primiera pos
pilotos.unshift("Teste"); //insere na primeira pos
console.log(pilotos);

//Vou adcionar ao índice a partir do indice 2 e removendo 0 elementos: a, b , ... , elementos
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);
