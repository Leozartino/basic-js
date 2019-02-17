//Mecanismos de tratamentos de erro.
function tratarErroLancar(erro){
    throw new Error('...');
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCasa + '!!!');
    }
    catch (e){
        tratarErroLancar(e)
    } 

};
const obj = {nome: 'Roberto'};
imprimirNomeGritado(obj);