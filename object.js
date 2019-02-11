//JS é uma linguaem multi-paradigma (funcional, estruturada, OO)
//Um par de chaves é  um representação de um objeto.
//Objeto em JS, é uma coleção de chave e valor ==> nome do atributo (ID) e o valor (que poder ser um texto, um number e etc)

const prod1 = {}; //objeto

const prod2 = {
    nome : 'Camisa Polo',
    preco : 49.90
    
}
prod1.nome = 'Celular';
prod1.preco = 4198.90;
console.log(prod1, prod2)//impressão de chave e valor

//dentro de um objeto só pode existir um único identificador (chave)
//é possivel gerar um json a partir de um objeto.