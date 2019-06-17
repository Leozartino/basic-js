const $pastaNiveis = document
  .querySelectorAll(".pastaN1")
  .forEach(spanNiveis => {
    spanNiveis.onclick = evento => {
      const $ul = spanNiveis.nextElementSibling;
      console.log($ul);
    };
  });

/*
Código mais procedutal do que funcional. Tente utilizar callbacks,
já que é bem mais comum e aconselhavel codar desta forma :)

const teste = document.querySelectorAll(".pastaN1");
for (let niveis of teste) {
  niveis.onclick = event => {
    console.log("A");
  };
}
 */
