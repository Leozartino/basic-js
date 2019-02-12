//Armazenando uma função em uma váriavel

let imprimirSoma = function(a, b){ //Função anônima.
   console.log(a + b);
};// Em JS é possivel armazenar uma função em uma VARIAVEL!!!!!

imprimirSoma(4,5);//o que esta sendo chamado é o nome da variavel que armazena uma função

//Armazenando uma funcao arrow em uma variavel, função reduzida. (Arrow function tem outros atrativos além da redução da inscrição)

const somaa = (a , b) => { //função sem nome ou anônima
    return a + b;
};

console.log(somaa(5, 6));//o que esta sendo chamado é o nome da variavel que armazena uma função

//Retorno implícito:

const subt = (a , b) => a - b; // Se não existir chaves, significa que a função possui uma única linha ou sentença de código.

console.log(subt(5 , 5));

const imprimir2 = palavra => console.log(palavra);
imprimir2('Olá mundo');