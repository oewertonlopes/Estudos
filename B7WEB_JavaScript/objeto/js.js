/*let carros = ["uno", "gol", "fusca", "corolla"];
//array*/
/*
let pessoa = {
  nome: "Ewerton",
  sobrenome: "Lopes",
  falando: false,
  idade: 33,
  altura: 1.8,
  peso: "91kg",
  falar: function () {
    this.falando = true;
    console.log(`Falando com ${this.nome} ${this.sobrenome}`);
  },
  responder: function () {
    if (this.falando == true) {
      console.log("Olá, bom dia.");
    }else {
      console.log(`${this.nome} não está disponível para conversa...`)
    }
  }
};
//objeto

//console.log(pessoa.peso)
pessoa.falar();
pessoa.responder();
*/

//Objetos dentro de array

let carros = [
  {
    fabricante: "Fiat",
    modelo: "Uno",
    ano: 2006,
    cor: "vermelha",
  },
  {
    fabricante: "Volks",
    modelo: "gol",
    ano: 1995,
    cor: "preta",
  },
  {
    fabricante: "Toyota",
    modelo: "corolla",
    ano: 2220,
    cor: "prata",
  },
];

console.log(carros)
console.log(carros[0].ano)
