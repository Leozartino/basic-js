/*
    Escopo: local (bloco de código) onde uma variavel é visivel

    Em algumas linguagens de programação, a variavel ou constante fica
    visivel somente dentro do escopo declarado, como em python, fora dele não é acessivel
    O que não acontece em JS, como no exemplo escrito aqui.
*/
{
    {
    var texto ='Texto';
    };
};

console.log(texto);

/*
    Porém, quando se tem funções:
    essa variavel só é visivel dentro do bloco. 
    Fora dele é inacessivel.
*/

function teste(){
    var local = 123;
    console.log(local);
};

teste();

//Quando se define um variavel fora de uma função, ela é global.
//Estara definida dentro do objeto window (se for em uma página-forn end)
//Apesar da "vantagem" de declarar uma variavel global que pode ser acessada de qualquer lugar
//também pode ser problemático, caso uma operação sobrescreva o valor da mesma.