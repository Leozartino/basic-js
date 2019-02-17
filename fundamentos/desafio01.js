function mostrarInfo (endereco) {
    const {logradouro, bairro, cidade, uf, numero} = endereco;
    return `O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua ${logradouro} com nº ${numero}`;
};

var pessoa = {
    logradouro : 'Rua dos Pinheiros',  
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP' 
};

console.log(mostrarInfo(pessoa));