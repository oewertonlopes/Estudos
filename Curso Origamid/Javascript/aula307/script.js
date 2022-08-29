const img = document.querySelector("img");
img.addEventListener("click", () => {
  console.log("Funcionou!");
});
//console.log(img);

///////////////////////////////////////////

const img2 = document.querySelector("img");
function callback() {
  console.log("Função fora do addEventListener.");
}

img2.addEventListener("click", callback);

///////////////////////////////////////////////////

const img3 = document.querySelector("img");
function callback(e) {
  console.log(e);
}

img3.addEventListener("click", callback);

///////////////////////////////////////////////////

const animaisLista = document.querySelector(".animais-lista");
function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.type);
  console.log(event.target);
}
animaisLista.addEventListener("click", callbackLista);

console.log(animaisLista);
//////////////////////////////////////////////////////

const linkExterno = document.querySelector('a[href^="http"]');
function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
  console.log("Clicou.");
}
linkExterno.addEventListener("click", handleLinkExterno);
////////////////////////////////////////////////////

const h1 = document.querySelector("h1");
function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);
h1.addEventListener("mouseout", handleEvent);
h1.addEventListener("mousemove", handleEvent);

window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
function handleKeyboard(event) {
  //console.log(event.which);
  if (event.which === 69) {
    console.log("Clicou na letra E.");
  }
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  }
}
window.addEventListener("keydown", handleKeyboard);
//////////////////////////////////////////////////////

const imgs = document.querySelectorAll("img");

function handleImg(evento) {
  console.log(evento.target.getAttribute("src"));
}
imgs.forEach((imagem) => {
  imagem.addEventListener("click", handleImg);
});
