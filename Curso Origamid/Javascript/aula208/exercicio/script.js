var campeao = [1959, 1962, 1970, 1994, 2002];

for (let i = 0; i < campeao.length; i++) {
  const anoVitoria = campeao[i];

  console.log(`O Brasil ganhou a copa de: ${anoVitoria}.`);
}

console.log("");
console.log("");

campeao.forEach((anoVitoria) => {
  console.log(`O Brasil ganhou a copa de: ${anoVitoria}.`);
});
/////////////////////////////////////////////////////

console.log("");
console.log("");

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}
//////////////////////////////////////////////////////////////////

console.log("");
console.log("");

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
var ultima = frutas[frutas.length -1]

var ultimaFruta = frutas.pop();
frutas.push("Melancia");
