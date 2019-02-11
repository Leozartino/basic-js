var numero = 1;

{
    var numero = 2;
    console.log('dentro = ' , numero);
};

console.log('fora = ' , numero);

//apesar de ser escrito dentro um escopo, o valor de numero é sobrescrito globalmente

