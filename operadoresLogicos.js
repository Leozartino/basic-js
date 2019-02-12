var idade = 18, nacionalidade = 'Brasileira';

if (idade >= 18 && nacionalidade === 'Brasileira'){
    console.log('Maior de idade no Brasil');

}
else if (idade >= 18 || nacionalidade === 'Brasileira' ){
    console.log('Maior de idade em algum país');
}

else{
    console.log('Não é maior de idade, pelo menos no Br');
};

//É possivél armazenar o resultado de uma verificação condicional em uma variaveis/constantes.
var sexo = 'F';
var masculino = (sexo ==='M');
console.log(masculino);
