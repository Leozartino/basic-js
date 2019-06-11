//How do u create a private variable in JavaScript?

function testPrivate() {
  let genericAtribute = `Hi, I'm String!!`;
  function Private() {
    return genericAtribute;
  }
  return Private;
}

let getPrivateVar = testPrivate();
console.log(getPrivateVar);

//What is the output?
var num = 5; //global
function outer() {
  var num = 2; //outer scope
  function inner() {
    num++; //undefined + 1 = NaN
    var num = 3; // num = 3
    console.log(num); // 3
  }
  inner(); // 3
}
outer(); // 3

//What is the output?
let ac = typeof 5;
ac = typeof ac;
console.log(ac); //string

//What is the output?

let hero = {
  _name: "Leon Doe",
  getScretName: function() {
    return this._name;
  }
};
let abc = hero.getScretName.bind(hero);
let cba = hero.getScretName();
console.log(abc());
console.log(cba);

console.log("2" + 2);
console.log(2 - "2");

let func = function() {
  {
    var v = "var";
    let l = "let";
  }
  console.log(v);
  //console.log(l);
};

func();
console.log(5 > 2 < 5); // 5 > 2 = true; true (1) < 5 = true
console.log(5 > 4 > 3); //5 > 4 = true; true (1) > 3 = false

//Algortimo para invertarValoresLista

function inverteLista(lista) {
  const tamanhoLista = lista.length - 1;
  let listaAlterada = new Array(lista.length);
  for (let x = 0; x <= tamanhoLista; x++) {
    listaAlterada[x] = lista[tamanhoLista - x];
  }
  return listaAlterada;
}
let listaA = [5, 2, 4, 6, 7, 8, 10];
console.log(inverteLista(listaA));

function inverteLista2(lista) {
  let novaLista = [];
  let tamanhoLista = lista.length - 1;
  for (let i = 0; i <= tamanhoLista; i++) {
    novaLista.push(lista[tamanhoLista - i]);
  }
  return novaLista;
}
console.log(inverteLista2(listaA));
