const contenido = document.querySelector(".content");
const navbar = document.querySelector("nav");
const logo = document.querySelector("i.fab");
function hidden() {
  contenido.classList.add("scale0");
  navbar.classList.add("scale0");
  logo.style.fontSize = "10em";
}

function show(...args) {
  logo.style.fontSize = "";
  // logo.style.removeProperty("fontSize");

  args.forEach((etiqueta) => {
    etiqueta.classList.remove("scale0");
    etiqueta.classList.add("scale1");
  });
}

hidden();
addEventListener("load", () => {
  setTimeout(show, 500, contenido, navbar);
});
