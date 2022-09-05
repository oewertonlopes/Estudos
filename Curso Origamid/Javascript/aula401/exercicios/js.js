// Transforme o objeto abaixo em uma Constructor Function
/*const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}
*/

function Pessoa(nomePessoa, idadeAtual) {
  this.nome = nomePessoa;
  this.idade = idadeAtual;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

////////////////////////////////////////////////////////////

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("Joao", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

/*
const Dom = {
  seletor: "li",
  element() {
    return document.querySelectorAll(this.seletor);
  },
  adicionar() {
    this.element().forEach((item) => {
      item.classList.add("teste");
    });
  },
  remover() {
    this.element().forEach((item) => {
      item.classList.remove("teste");
    });
  },
};*/

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;

  this.adicionarClasse = function (classe) {
    elementList.forEach((item) => {
      item.classList.add(classe);
    });
  };
  this.removerClasse = function (classe) {
    elementList.forEach((item) => {
      item.classList.remove(classe);
    });
  };
}

const listaItens = new Dom("li");
const listaUl = new Dom("ul");
