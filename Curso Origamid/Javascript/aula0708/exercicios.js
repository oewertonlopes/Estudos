// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

console.log(btnStyles.backgroundColor);
console.log(btnStyles.color);
console.log(btnStyles.margin);

const { backgroundColor: ex1, color: ex2, margin: ex3 } = btnStyles;

console.log(ex1, ex2, ex3);

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};

//const {bobCor: cor } = cachorro;  //erro

const { cor: bobCor } = cachorro;

console.log(bobCor);
