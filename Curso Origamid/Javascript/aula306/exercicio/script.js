// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImagem = document.querySelector(".animais-lista li");
const distanciaImagem = primeiraImagem.offsetTop;
console.log(distanciaImagem);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagensTotal = document.querySelectorAll("img");
  let soma = 0;
  imagensTotal.forEach((img) => {
    soma = soma + img.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");
console.log(links);
links.forEach((link) => {
  const linkHeigth = link.offsetHeight;
  const linkWidth = link.offsetWidth;
  if (linkWidth >= 48 && linkHeigth >= 48) {
    console.log(link, "Possui acessibilidade.");
  } else {
    console.log(link, "Não possui boa acessibilidade.");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menuMobile = document.querySelector(".menu");
const tamanhoBrowser = window.innerWidth;
console.log(tamanhoBrowser);
if (tamanhoBrowser < 720) {
  menuMobile.classList.add("menu-mobile");
}
