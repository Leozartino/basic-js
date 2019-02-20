//Usar no  âmbito de uma função.

function rand ({min = 0, max = 1000}){ 

    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    };
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

const obj = {min: 90, max:5 };
console.log(rand(obj)); 
console.log(rand({}));
console.log(rand({max:9875}));

