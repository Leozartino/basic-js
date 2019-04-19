//Ajax é uma requisição assíncrona que acontece no Backend.
//Forma de requisitar informações do servidor sem precisar atualizar a página
//No JS, ao invés de ter que recarregar a página para trazer novas informações para o nosso servidor
//é possivel utilizar o Ajax.
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/leozartino');
xhr.send(null);

xhr.onreadystatechange = function (){
  if(xhr.readyState === 4){ //a constante que significa que a resposta foi um sucesso! (4)
    console.log(JSON.parse(xhr.responseText));
  }
}
/* let minhaPromisse = () => new Promise(function(resolve, reject){
  //classe necessária para recuperar alguma info do servidor (fornece funcionalidades)
  let xhr = new XMLHttpRequest(); 
  //api de usuários do github
  //Para buscar alguma informação o método é GET


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
console.log(resultado); */