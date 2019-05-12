const filhos = ["luan", "luis", "pedro"];
const filhas = ["luciana", "milena", "paula"];
const todos1 = filhos.concat(filhas);
const todos2 = [...filhos, ...filhas]; //utilizando o spread
console.log(todos1);
console.log(todos2);
