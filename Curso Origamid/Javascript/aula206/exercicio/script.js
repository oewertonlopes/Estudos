var me = {
  nome: "Ewerton",
  sobrenome: "Lopes",
  idade: 33,
  profissao: "policial",
  timeFutebol: "sport",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

//////////////////////////////////////////////////////////////////////////

var carro = {
  preco: 1000,
  portas: 4,
  marca: "audi",
};

carro.preco = 3000;

/////////////////////////////////////////////////////////////////////////

var cachorro = {
  nome: "Floquinho",
  idade: 10,
  raca: "labrador",
  cor: "preta",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir.";
    } else {
      return "Ficar quieto.";
    }
  },
};
