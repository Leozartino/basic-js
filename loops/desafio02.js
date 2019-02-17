/*

Write a JavaScript conditional statement to find the sign of product of three numbers. 
Display an alert box with the specified sign.
Sample numbers : 3, -7, 2 
Output : The sign is - 

*/
function exibirResultadoSinal(n1, n2, n3) {

  var result = n1 * n2 * n3;
  
  if (result < 0) {
    return `The sing is negative. Result = ${result}`;
  }
  else if (result === 0) {
    return `Neutral. Result = ${result}`;
  }
  else {
    return `The sing is positive. Result = ${result}`;
  };
};

console.log(exibirResultadoSinal(6, -3, 2));
