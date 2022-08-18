const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);
console.log(gridSection.length);
console.log(gridSection[1]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInterno = document.querySelector('[href^="#"');
console.log(linksInterno);

const animaisImg = document.querySelectorAll(".animais img");

console.log(animaisImg[1]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
