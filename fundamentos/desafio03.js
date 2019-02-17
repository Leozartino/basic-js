function habilidades(vetorH = []) {
    
//Este cod ficou maior que o ideal, pois bastaria utilizar o indxOf para posteriormente,
//através do seu retorno fazer a comparação e retornar true ou false.
//Mas isso demostra que não fiquei refem dos artificios da linguagem de prog
//A base de lógica de programação me permitiu realizar o desafio 
//sem depender de um metodo específico, mesmo que mais simplificado.

    var control = 0;

    for (var i = 0; i < (vetorH.length); i++) {

        if (vetorH[i] === 'Javascript') {
            return true;
            break;
        }
        else {
            control += 1;
            if (control === vetorH.length) {
                return false;
            };
        };
    };

};
console.log(habilidades([]));

/*
Através do .indexOf é possivel "procurar" um valor passado no parametro 
e percorrendo o vetor até o final, caso ache retorna o indice do vetor, string e caso
não ache, retorna -1
*/