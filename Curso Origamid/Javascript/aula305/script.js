const menu = document.querySelector(".menu");

console.log(menu.className); // string
console.log(menu.classList); // lista de classes
console.log(menu.classList.add("ativo"));
console.log(menu.classList.add("ativo", "mobile")); // duas classes
console.log(menu.classList.remove("ativo"));
console.log(menu.classList.toggle("ativo")); // adiciona/remove a classe
console.log(menu.classList.contains("ativo")); // true ou false
console.log(menu.classList.replace("ativo", "inativo"));
///////////////////////////////////////
const animais = document.querySelector(".animais");
console.log(animais.attributes);
//////////////////////////////////////

const img = document.querySelector("img");

console.log(img.getAttribute("src"));
console.log(img.setAttribute("alt", "Texto Alternativo"));
console.log(img.getAttribute("alt"));
console.log(img.hasAttribute("id"));
console.log(img.hasAttribute('src'))
console.log(img.removeAttribute("alt"));

/////////////////////////////////////

