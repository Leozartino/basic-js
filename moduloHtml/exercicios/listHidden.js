const $pastaNiveis = document
  .querySelectorAll(".pastaN1")
  .forEach(spanNiveis => {
    spanNiveis.onclick = evento => {
      const $ul = spanNiveis.nextElementSibling;
      cosnole.log($ul);
    };
  });
