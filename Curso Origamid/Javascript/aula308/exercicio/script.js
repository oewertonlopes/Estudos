// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
//console.log(menu);
const cloneMenu = menu.cloneNode(true);
//console.log(cloneMenu);
const copy = document.querySelector(".copy");
//console.log(copy);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector(".faq");
//console.log(faq);
const primeiroDt = faq.querySelector("dt");
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;
console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML

