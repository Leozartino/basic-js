/*
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
it will check if the current number is odd or even, 
and display a message to the screen. 
*/
function verificaParImpar(x, y) {  
  for (var i = x; i <= y; i++) {
    if (i % 2 === 0) {
      if (i === 0) {
        console.log(`${i} is Neutral!`);
      }
      else {
        console.log(`${i} is Odd!`);
      };
      
    }
    else {
      console.log(`${i} is Even!`);
    };
    
  };
  
};
verificaParImpar(0,15);