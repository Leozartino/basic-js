//Usar no  âmbito de uma função.
//extração de atributos de um array em uma função.
function rand ([min = 0, max = 1000]){ 

    if (min > max) {
       [min , max] = [max, min];
    };

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

const array = [90, 5 ];
console.log(rand(array)); 
console.log(rand([]));
console.log(rand([1001]));
