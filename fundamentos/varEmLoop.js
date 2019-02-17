
for (var i = 0; i < 5; i++){ //Sempre quando é feita uma comparação o resultado é verdadeiro ou falso
                             //Quando for false, o loop encerra.
};

console.log(i) //impressão de i.

//----------------*---------------------
//Observe que ao executar o código, resultará em um erro, pois o let considera o escopo de bloco
//O erro informará que ao tentar imprimir o valor de b, não foi achado esta variavel ou não foi definida.
for(let b = 0; i < 10; i++){
};  
console.log(b); 