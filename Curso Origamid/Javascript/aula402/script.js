function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return "Pessoa andou";
};

const Ewerton = new Pessoa("Ewerton", 33);
//////////////////////////////////////////////////////////////

const pais = "Brasil";
const cidade = new String("Recife");

const listaAnimais = ["cachorro", "gato", "cavalo"];

const lista = document.querySelectorAll("li");
const listaArray = Array.prototype.slice.call(lista);
const novaLista = Array.from(lista);

console.log(Object.getOwnPropertyNames(lista));
console.log(Object.getOwnPropertyNames(listaArray));
console.log(Object.getOwnPropertyNames(novaLista));
///////////////////////////////////////////////////////////////

const carro = {
  marca: "Ford",
  preco: 50000,
  acelerar() {
    return true;
  },
};
