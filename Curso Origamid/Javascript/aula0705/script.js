console.log(somar(4, 5)); //funciona

function somar(a, b) {
  return a + b;
}

///////////////////////////////////
//console.log(soma(8, 6)); //não funciona

const soma = function (a, b) {
  return a + b;
};
console.log(soma(8, 6));
//////////////////////////

const subtracao = (a, b) => {
  return a - b;
};

console.log(subtracao(5, 1));
//////////////////////////

const instrumento = "violão";

(() => {
  const instrumento = "guitarra";
  console.log(instrumento);
})();

console.log(instrumento);

//Exercícios

// Remova o erro

const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
priceNumber("R$ 99,99");

// Crie uma IIFE e isole o escopo de qualquer código JS.

((teste) => {
  const abc = "texto";
  console.log(abc);
})();

// Como podemos utilizar a função abaixo.
const active = (callback) => callback();
