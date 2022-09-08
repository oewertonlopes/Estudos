const marcaCarros = ["Ford", "Fiat", "Honda"];

//marcaCarros.forEach(function (item, index, array) {
//  console.log(item, index, array);
//});

marcaCarros.forEach((i, ind, a) => {
  console.log(i, ind, a);
});

//////////////////////////////////////////////////////

marcaCarros.forEach((i, ind, a) => {
  console.log(i.toUpperCase());
});

/////////////////////////////////////////////////////////

//const li = document.querySelectorAll("li");
//li.forEach((i) => i.classList.add("ativo"));

//console.log(li);

///////////////////////////////////////////////////////////

const li = document.querySelectorAll("li");
const retornoForeach = li.forEach((i) => i.classList.add("ativo"));

console.log(li);
console.log(retornoForeach);
//////////////////////////////////////////////////////////////////

const frutas1 = ["Laranja", "Maça", "Banana"];
const retornoFrutas = frutas1.map((item, index, array) => {
  return item.concat(" saborosa");
});
console.log(retornoFrutas);

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosX2 = numeros1.map((item) => {
  return item * 2;
});

console.log(numerosX2);
//////////////////////////////////////////////////////////////////////////////////

const aulas = [
  {
    nome: "Html1",
    min: 15,
  },
  {
    nome: "html2",
    min: 10,
  },
  {
    nome: "css1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

let somaTempo = 0;
const tempoAula = aulas.map((item) => {
  somaTempo += item.min;
  return item.min;
});

console.log(tempoAula);
console.log(`O tempo total das aulas foi de: ${somaTempo} minutos.`);
/////////////////////////////////////////////////////////////////////////////

const tempoAulas = [10, 25, 30];
const totalTempoAulas = tempoAulas.reduce((acumulador, item, index, array) => {
  return acumulador + item;
}, 0);

console.log(totalTempoAulas);
/////////////////////////////////////////////////////

const numeros2 = [10, 25, 60, 5, 35, 10];
const maiorNumero = numeros2.reduce((acumulador, index) => {
  //if (acumulador < index) {
  //  return index;
  // } else {
  //   return acumulador;
  //  }
  return acumulador < index ? index : acumulador;
}, 0);

console.log(maiorNumero);
////////////////////////////////////////////////////////////////////////////////

const aulas2 = [
  {
    nome: "Html1",
    min: 15,
  },
  {
    nome: "html2",
    min: 10,
  },
  {
    nome: "css1",
    min: 20,
  },
  {
    nome: "js 1",
    min: 25,
  },
];

const listaAulas2 = aulas2.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas2);
/////////////////////////////////////////////////////////////////////////

const cores = ["vermelho", "azul", "amarelo", "roxo"];
const coresDireita = cores.reduceRight((acc, cor) => {
  return acc + " " + cor;
});
const coresEsquerda = cores.reduce((acc, cor) => {
  return acc + " " + cor;
});
console.log(coresDireita);
console.log(coresEsquerda);

//////////////////////////////////////////////////////////////////////////////////

const frutas2 = ["banana", "pera", "maçã", ""];
const temUva = frutas2.some((index) => {
  return index === "Uva";
});
console.log(temUva);

const temBanana = frutas2.some((index) => {
  return index === "banana";
});
console.log(temBanana);

const frutasCheias = frutas2.every((index) => {
  return index;
});
console.log(frutasCheias);

const numeros3 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros3.every((index) => {
  //return index > 3;
  return index > 7;
});

console.log(maiorQue3);
///////////////////////////////////////////////////////////////////////////////

const numeros = [6, 43, 22, 88, 101, 29, 6, 43, 22, 88, 101, 29];
const busca22 = numeros.find((index) => {
  return index > 100;
});

console.log(busca22);

const frutas4 = ["banana", "pera", "maçã", "", "banana", "pera", "maçã", ""];
const buscaPera = frutas4.findIndex((index) => {
  return index === "pera";
});

console.log(buscaPera);

///////////////////////////////////////////////////////////////////////////////

const frutas = ["Banana", undefined, null, "", "Carro", 0, "Maçã"];
const frutasItensVerdadeiros = frutas.filter((index) => {
  return index;
});
console.log(frutasItensVerdadeiros);

const aulas3 = [
  {
    nome: "Html1",
    min: 15,
  },
  {
    nome: "html2",
    min: 10,
  },
  {
    nome: "css1",
    min: 20,
  },
  {
    nome: "js 1",
    min: 25,
  },
];

const aulasMaioresQue20 = aulas3.filter((index) => {
  return index.min >= 20;
});
console.log(aulasMaioresQue20);
