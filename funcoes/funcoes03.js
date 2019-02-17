//Valor padrão sem utilizar o método do EcmaScript2015
var soma = function (a,b){
  if (isNaN(a) === true){
    a = 0;
  }
  if (isNaN(b) === true){
    b = 0;
  };
  a = Number(a)
  b = Number(b)
  return a + b;
};

console.log(soma('3',3))

 var [a,b,c] = []
 a = a || 0
 b = b || 0
 c = c || 0

 console.log(a,b,c)

//Valor padrão ecmascriot2015
var sum = function(x = 0, y = 0, z = 0){
  x = Number(x);
  y = Number(y);
  z = Number(z);
  return x + y + z;
};

console.log(sum());