var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(elements.map(function(element) { 
  return element.length; 
})) // esta sentença retorna o array: [8, 6, 7, 9]

let arrayTeste = [
  'OLá',
  'Leonardo',
  'Matenha-se',
  'Firme'
];

console.log(arrayTeste.map( (a) => {
  return a.length;
}))