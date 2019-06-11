const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.get("react"));

const chavesVariadas = new Map([
  [function() {}, "Fun"],
  [123, { nome: "Leonardo", idade: 22 }],
  [{}, "TesteOBjeto"]
]);

chavesVariadas.forEach((vl, ch) => console.log(ch, vl));
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
