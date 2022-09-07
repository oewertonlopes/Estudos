const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];
////////////////////////////////////////////////

const carros = new Array("Corolla", "Mustang ", "Civic");
console.log(carros.length);
carros[11] = "Fiat";
console.log(carros);
carros[2] = "Ferrari";
console.log(carros);
///////////////////////////////////////////////////////////

const li = document.querySelectorAll("li");
console.log(li);
const arrayLi = Array.from(li);
console.log(arrayLi);

///////////////////////////////////////////////////

console.log(Array.isArray(li));
console.log(Array.isArray(arrayLi));
console.log(Array.of(9));
console.log(Array.of(9, 6, 5, 4, 3, "teste"));
console.log(Array(4));
console.log(Array(1, 2, 3, 4, 5));
////////////////////////////////////////////////////////////////////

const frutas = ["Banana", "Pera", ["Uva Roxa", "Uva Verde"]];

console.log(frutas[2][0].length);
///////////////////////////////////////////////////////////////

const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
console.log(instrumentos2);
instrumentos2.sort();
console.log(instrumentos2);

const numeros = [1, 2, 3, 54, 6, 5, 4, 3, 4, 5, 565, 77, 7, 78, 6, 4, 3, 23];
console.log(numeros);
numeros.sort(); //Não funciona com números
console.log(numeros);
////////////////////////////////////////////////////////////////

const marcas = ["Ford", "Vw", "GMC", "FIAT", "Chevrolet"];
console.log(marcas);
marcas.unshift("Honda", "KIA");
console.log(marcas);
marcas.push("Toyota", "Renault");

console.log(marcas);

marcas.shift();
console.log(marcas);
marcas.pop();
console.log(marcas);
marcas.reverse();
console.log(marcas);

marcas.splice(6, 0, "teste");
console.log(marcas);

marcas.copyWithin(0, 1, 6);
console.log(marcas);

["item1", "item2", "item3", "item4", "item5", "item6"].fill("Banana");

console.log(
  ["item1", "item2", "item3", "item4", "item5", "item6"].fill("Banana")
);
console.log(
  ["item1", "item2", "item3", "item4", "item5", "item6"].fill("Banana", 2)
);
console.log(
  ["item1", "item2", "item3", "item4", "item5", "item6"].fill("Banana", 1, 3)
);
//////////////////////////////////////////////////////////////////////////////////

const transporte1 = ["Barco", "Aviao"];
console.log(transporte1);
const transporte2 = ["Carro", "Moto"];
console.log(transporte2);
const transportes = transporte1.concat(transporte2);
console.log(transportes);
const transportesMaisOutrosTransportes = [].concat(
  transporte1,
  transporte2,
  "Van"
);
console.log(transportesMaisOutrosTransportes);
/////////////////////////////////////////////////

const linguagens = ["html", "css", "js", "php", "python", "typescript", "js"];
console.log(linguagens);

console.log(linguagens.includes("html"));
console.log(linguagens.includes("ruby"));
console.log(linguagens.indexOf("php"));
console.log(linguagens.indexOf("js"));
console.log(linguagens.lastIndexOf("js"));
////////////////////////////////////////////////////////////////////////////////////

console.log(linguagens.join());
console.log(linguagens.join(""));
console.log(linguagens.join(", "));
console.log(linguagens.join("- "));

let htmlString1 = "<h2>Titulo Primário</h2>";
console.log(htmlString1);
htmlString = htmlString1.split("h2");
console.log(htmlString1);
htmlString = htmlString1.join("h1");
console.log(htmlString1);

let htmlString = "<h2>Titulo Primário</h2>";
console.log(htmlString);
htmlString = htmlString.split("h2").join("h1");
console.log(htmlString);

console.log(linguagens.slice(4));
console.log(linguagens.slice(1, 3));

const novasLinguagens = linguagens.slice(3);
console.log(novasLinguagens);
