// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");
console.log(itensMenu);

itensMenu.forEach(function (item) {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

const primeiro = itensMenu[0];
console.log(primeiro);
primeiro.classList.add("ativo");
/*
//Remove 'class' dos links
itensMenu.forEach((item)=>{
  item.removeAttribute('class')
})
*/

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");
imgs.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
/*const externo = document.querySelectorAll("a");
externo.forEach((item, index, a) => {
  console.log(item, index, a);
});
externo[3].setAttribute('href', 'teste.com')*/

const linkExterno = document.querySelector("a[href^='http']");
linkExterno.setAttribute("href", "https://google.com");
