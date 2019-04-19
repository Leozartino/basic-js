//São códigos que não vão influenciar na linha do tempo do JS
//São funções que devolvem o valor de resultado de sucesso ou fracasso só depois de um tempo

let minhaPromisse = function(){
  return new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/leozartino');
    xhr.send(null);

    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject('Erro na requisição!') 
      }
    }
  })
}

minhaPromisse()
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.warn(error)
  })