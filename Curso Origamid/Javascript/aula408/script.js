const perimetro = new Function("lado", "return lado*4");

//console.log(perimetro(5));

function somar(n1, n2) {
  return n1 + n2;
}

//console.log(somar.length); //total de argumentos
//console.log(somar.name); //nome da funcao

//////////////////////////////////////

function darOi() {
  //console.log("Oi para você.");
}

darOi.call();

const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro();
descricaoCarro.call();
descricaoCarro.call(carro);
descricaoCarro.call({ marca: "Honda", ano: 2015 });

const carros = ["Ford", "Fiat", "Volks"];
const frutas = ["Banana", "Uva", "Maçã"];

carros.forEach((item) => {
  console.log(item.toUpperCase());
});

carros.forEach.call(frutas, (item) => {
  console.log(item.toUpperCase());
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const ul = new Dom("ul");
const li = {
  element: document.querySelector("li"),
};

//ul.ativo("novaClasse");
ul.ativo.call(li, "novaClasse");


function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const li = {
  element: document.querySelector("li"),
};

Dom.prototype.ativo.call(li, "ativar");


const frutas = ["Banana", "Uva", "Maçã"];

Array.prototype.pop.call(frutas); // =frutas.pop()
console.log(frutas);


const li = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});

console.log(filtro);


//console.log(Math.max(3, 43, 56, 445, 4332));
const numeros = [33, 232, 34, 434, 54, 5424, 4];
console.log(Math.max(numeros));
console.log(Math.max.apply(null, numeros));
