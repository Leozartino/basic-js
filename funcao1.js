// Função sem retorno

function imSoma (a, b){
    console.log(a + b);

};
imSoma(2,3);

//Função com retorno

function soma (a = 0, b = 0 ){ //a e b possuem valores inicializados, são considerados valores padrão.
    return a + b;
};
console.log(soma());

