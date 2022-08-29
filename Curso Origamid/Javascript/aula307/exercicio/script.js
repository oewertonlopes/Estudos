// Quando o usuário clicar nos links internos do site,*
// adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma.
//Previna o comportamento padrão desses links**

const linksSite = document.querySelectorAll("a[href^='#']");

function handleLink(event) {
  event.preventDefault();
  linksSite.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksSite.forEach((link) => {
  link.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
/*
const elementos = document.querySelectorAll("body *");

function handleElemento(event) {
  console.log(event.currentTarget);
}

elementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});
*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
const elementos = document.querySelectorAll("body *");

function handleElemento(event) {
  this.remove();
}

elementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});
*/
// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleAumentar(event) {
  if (event.which === 84) {
    console.log("Clicou na letra T.");
    document.documentElement.classList.toggle("aumentar");
  }
}
window.addEventListener("keydown", handleAumentar);
