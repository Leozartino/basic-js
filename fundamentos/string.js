const nome = 'AA';
const nome2 = 'AB';

console.log('\nPrimeiro letra no primeiro índice:' , nome.charAt(0));
console.log('Tamnho da string é:' , nome.length);
console.log('O código unicode da letra na posição 0 é:' , nome.charCodeAt(0)); // foi no indice indicado e retornou o valor unicode associado ao caractere.
console.log(nome.indexOf('L')); //procura o caractere passado no paramêtro e retorna a posição no indice, caso exista.
console.log(nome.substring(0, 4)); // retorna a string iniciada no indice 0 e terminada no indice 4 , sem incluir, nesse caso o indice 4.
console.log('Welcome ' + nome + '!');
console.log(nome.replace('Leonardo', 'Laura'));
console.log('Ana, Maria, João'.split(','));

 console.log(nome.localeCompare(nome2));