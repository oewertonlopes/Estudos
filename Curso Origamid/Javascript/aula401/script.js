/*const carro = {
  modelo: "Marca",
  preço: 0,
};

const honda = carro;

honda.modelo = " Civic";
honda.preço = 85000;

const fiat = carro;
fiat.modelo = "Linea";
fiat.preço = 50000;
*/
/////////////////////////////////////////////////////////////////////

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro("Civic", 50000);

/////////////////////////////////////////////////////////////////////
/*
function Carro2(modeloCarro, precoInicial) {
  const taxaJuro = 1.5;
  const precofinal = precoInicial * taxaJuro;
  this.modelo = modeloCarro;
  this.preco = precofinal;
  return console.log(this.modelo, this.preco);
}

const Volks = new Carro2("Gol", 50000);
*/
//////////////////////////////////////////////////////////////////

/*
const Dom = {
seletor: "li",
element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add("ativar");
  },
};
*/

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
const liFinal = new Dom('li:last-child')
