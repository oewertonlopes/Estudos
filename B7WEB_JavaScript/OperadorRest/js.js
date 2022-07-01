/*function adicionar(...numeros) {
  console.log(numeros);
}

adicionar(5, 6, 7, 8, 9, 10, 12, 13, 14);

function adicionar(...nomes) {
  console.log(nomes);
}

adicionar("teste", "teste2", "teste3", "teste4");
*/

function adicionar(nomes, ...novosNomes) {
  let novoConjunto = [...nomes, ...novosNomes];
  return novoConjunto;
}
let nomes = ["ewerton", "lopes"];
let outros = adicionar(nomes, "teste1", "teste2");

console.log(outros);
