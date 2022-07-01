/*let numeros = [1, 2, 3, 4];
let outrosNumeros = [...numeros, 5, 6, 7, 8];
console.log(outrosNumeros)*/
/*
let info = {
  nome: "Ewerton",
  sobrenome: "Lopes",
  idade: "33",
};

let novaInfo = {
  ...info,
  sexo: "masculino",
  cabelo: "preto",
};

console.log(novaInfo);
*/

function adicionarInfo(info) {
  let novasInfo = {
    ...info,
    status: 0,
    token: "ereasdas",
    data_cadastro: "33232",
  };
  return novasInfo;
}

adicionarInfo({ nome: "Ewerton", sobrenome: "Lopes" });

console.log(adicionarInfo({ nome: "Ewerton", sobrenome: "Lopes" }))