const A = {nome : 'José'}; // O que A armazena é um endereço que aponta para o objeto
console.log(A);
const B = A; // B armazena agora o mesmo endereço que A aponta
console.log(B);
/*
    Se isso é verdade, então se alterarmos o valor da chave a partir de B
    teremos mudança também em A, segue abaixo o exemplo:
*/
B.nome = 'Leonardo';
//B & A tem a mesma referência para o objeto
console.log(A); 
console.log(B);

/*
    PORÉM quando se trata de tipos primitivos, é feito uma copia por valor,
    em vez de ser por referência (valores independentes), segue o exemplo abaixo:
*/

let c = 5;
let d = c; // a variavel d recebe a copia do valor de c, e por isso não aponta para o mesmo endereço que c
d = ++d;
console.log (c, d);
