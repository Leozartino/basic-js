//Ajax é uma requisição assíncrona que acontece no Backend.
//Forma de requisitar informações do servidor sem precisar atualizar a página
let minhaPromisse = () => new Promise(function(resolve, reject){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users/leozartino');
  xhr.send(null);

  xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 ){
      if (xhr.status === 200){
        resolve(JSON.parse(xhr.responseText))
      }
      else{
        reject('Erro de requisição');
      }
    }
  }
});


let resultado = minhaPromisse();
console.log(resultado);