function genere(gender){
    
    switch (gender){

        case 'M':
        return 'Masculino';
        
        case 'F':
        return 'Feminino';

        default:
        return 'Indefinido';
    };
};

console.log(genere('F'));