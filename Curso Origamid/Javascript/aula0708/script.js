const carro = {
  marca: "honda",
  modelo: "Civic",
  ano: 2018,
  motor: 2.0,
  //portas:4
};

const { marca, ano, portas = "2" } = carro;

console.log(marca);
console.log(ano);
console.log(portas);
///////////////////////////////////////////

const cliente = {
  nome: "Ewerton",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video js", "video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

//console.log(cliente.compras.digitais.livros);
//console.log(cliente.compras.digitais.videos);

const { livros, videos } = cliente.compras.digitais;

console.log(livros);
console.log(videos);
////////////////////////////////////////////////

const nome = {
  primeiroNome: "Ewerton",
  segundoNome: "Lopes",
};

const { primeiroNome: nomeInicio } = nome;
//console.log(primeiroNome);
console.log(nomeInicio);

/////////////////////////////////////////////////////////

const frutas = ["banana", "uva", "maça"];

const [, segunda] = frutas;
console.log(segunda);

/////////////////////////////////////////

function handleKeyboard(event) {
  const evento = event.key;
  console.log(evento);
}

document.addEventListener("keyup", handleKeyboard);

///////////////////////