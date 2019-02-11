let numero = 1 ;

{   //o let tem escopo de bloco,diferente do var que não difere.
    let numero = 2;
    console.log('dentro =', numero);
};

console.log('fora = ' , numero);

//let: escopo de bloco, escopo de função e escopo global.