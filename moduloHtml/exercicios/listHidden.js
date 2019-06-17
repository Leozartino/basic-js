const $linksNiveis = document.querySelector("a .linkA");
const $ulNiveis = document.querySelector("ul .ulA");

$linksNiveis.onclick = () => {
  const ulTemp = $ulNiveis;
  $ulNiveis ? ($ulNiveis.innerHTML = "") : ($ulNiveis = ulTemp);
};
