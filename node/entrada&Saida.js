process.stdout.write("Olá, informe o seu nome: ");
process.stdin.on("data", data => {
  //evento data para pegar os dados digitas (vem com o enter)
  const entradaUser = data.toString().replace("\n", "");
  process.stdout.write(`Eai, ${entradaUser}`);
  process.exit();
});
