// Retorne no console todas as imagens do site
const imgSite = document.querySelectorAll("img");
const teste = document.getElementsByTagName("img");

console.log(imgSite);
console.log(teste);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const comecaImg = document.querySelectorAll("img[src^='/img/imagem']");
console.log(comecaImg);

// Selecione todos os links internos (onde o href começa com #)

const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site

const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length - 1]);
