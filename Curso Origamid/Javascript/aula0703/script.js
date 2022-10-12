class veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou.");
  }
}

class Moto extends veiculo {
  empinar() {
    console.log("Moto empinou com " + this.rodas + " rodas.");
  }
}

const honda = new Moto(2);
const civic = new veiculo(4);
