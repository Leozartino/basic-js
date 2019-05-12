//O Node pode ser usado como servidor. Ele pode funcionar como o Apache, pode ser
//um servidor web, provê arquivo, prove imagem, prove um vídeo, gera conteudo dinamico
//pode servir como a API do sistema.
//Em Node um arquivo representa um módulo (interior).
//Em um módulo o seu conteúdo a priori, é visivel somente internamente
//Para exportar:

this.mensagem = "Isso é apenas um teste, amigo!!";
exports.msg = "Isso também é um teste, xD";
module.exports.ateLogo = "Até logo :Z";
