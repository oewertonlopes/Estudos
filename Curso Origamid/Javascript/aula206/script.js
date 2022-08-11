var pessoa = {
  nome: "Ewerton",
  sobrenome: "Lopes",
  idade: 33,
  profissao: "policial",
  possuiFaculdade: true,
};

console.log(pessoa);
console.log(pessoa.nome, pessoa.sobrenome);

/////////////////////////////////////////////////////////////////

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

/////////////////////////////////////////////////////////////////

console.log(Math.PI);
console.log(Math.random());
console.log(Math.E);
console.log(console.table(quadrado));

////////////////////////////////////////////////////////////////
var teste = 190;
var menu = {
  width: 800,
  teste: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.teste / 2;
  },
  //return teste / 2; = 95
};

menu.backgroundColor = "#e21";

menu.fontFamily = "arial";

var bg = menu.backgroundColor;
var width = menu.width;
var height = menu.height;
