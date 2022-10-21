/*
const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

for (const fruta of frutas) {
  console.log(...fruta);
}

//for (const char of frase) {
//  console.log(char);
//}

const buttons = document.querySelectorAll("button");
for (const btn of buttons) {
  btn.style.color = "red";
}
console.log(buttons);
console.log(...buttons);

//fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
//  console.log(headers)
//);

const carro = {
  marca: "honda",
  ano: 2018,
};

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: false, //true, //true o valor é visivel, false, não.
  },
});

for (const key in carro) {
  console.log(carro[key]);
}

const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
  console.log(`${style}:${btnStyles[style]}`);
}

let i = 0;
do {
  console.log(i++);
} while (i <= 20);
*/
// Crie 4 li's na página.
// Utilizando o for...of e adicione uma classe a cada li

const itens = document.querySelectorAll("li");

for (const item of itens) {
  item.classList.add("teste");
}
console.log(itens)

// Utilize o for...in para listar todas as propriedades e valores do objeto window

for (const info in window) {
  console.log(`${info} -- ${window[info]}`);
}
