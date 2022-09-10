const pessoa = new Object({
  nome: "Ewerton",
  idade: 28,
});

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  ano: 2018,
  acelerar() {
    return this.marca + " Acelerou.";
  },
  buzinar() {
    return this.marca + " buzinou.";
  },
};

const honda = Object.create(carro).init("honda");
console.log(honda.acelerar());

const ferrari = Object.create(carro).init("Ferrari");
console.log(ferrari.acelerar());

///////////////////////////////////////////////////////////////////////////

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto1 = {
  rodas: 2,
  capacete: true,
};

const carro2 = {
  rodas: 4,
  mala: true,
};

Object.assign(moto1, funcaoAutomovel);
Object.assign(carro2, funcaoAutomovel);
console.log(moto1);
console.log(carro2);

////////////////////////////////////////////////////

const moto = {
  //rodas: 2,
  capacete: true,
};
console.log(moto);
//moto.rodas = 5;
console.log(moto);

Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, //começa como falso impede de deletar, configurar
    writable: false, //começa como falso. impede de escrever
    enumerable: false, //começa como falso
  },
});

moto.rodas = 50;
delete moto.rodas;
console.log(moto);
