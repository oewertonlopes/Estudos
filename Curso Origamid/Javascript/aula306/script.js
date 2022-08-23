const listaAnimais = document.querySelector(".animais-lista");

const heigth = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(heigth);
console.log(animaisTop);

const primeiroH2 = document.querySelector("h2");
const h2left = primeiroH2.offsetLeft;

const rect = primeiroH2.getBoundingClientRect();
console.log(h2left);

console.log(rect);

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageXOffset,
  window.pageYOffset
);

const small = window.matchMedia("(max-width:600px");
if (small.matches) {
  console.log("Usuário Mobile");
} else {
  console.log("Usuário Desktop");
}
