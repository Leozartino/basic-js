//1. Write a JavaScript program that accept two integers
//and display the larger.

function exibirMaior(x, y) {
  if (x > y) {
    return `The large number is ${x}`;
  } else if (y > x) {
    return `The large number is ${y}`;
  } else {
    return "The values are equal";
  }
}
console.log(exibirMaior(5, 5));
