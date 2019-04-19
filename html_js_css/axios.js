//Utilizar a biblioteca axios para realização de requisições Assincronas no JS.
//Deve ser importado no arquivo HTML, antes da referenciação do script principal.
//Por baixo dos panos o que está sendo feito é um XMLHttpRequest
//Axios ajuda a retornar os valores de forma mais fácil.
//Sintaxe muita mais fácil
axios.get('https://api.github.com/users/leozartino')
  .then(function(response){
    console.log(response.data.avatar_url);
  })
  .catch(function(error){
    console.warn(error);
  });
