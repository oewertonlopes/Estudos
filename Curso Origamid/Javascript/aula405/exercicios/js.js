// Retorne um número aleatório entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";

let stringEmNumero = 0;
const stringEmArray = numeros.split(", ");
console.log(stringEmArray);
console.log(Math.max(...stringEmArray));

// Crie uma função para limpar os preços e retornar os números com centavos arredondados depois retorne a soma total

const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

let somaTotal = 0;
listaPrecos.forEach((item) => {
  const arrayEmNumeros = parseFloat(
    item.toLowerCase().trimStart().slice(2).trimStart().replace(",", ".")
  );
  const numeroComCentavos = +arrayEmNumeros.toFixed(2);
  somaTotal += numeroComCentavos;
});
console.log(somaTotal);
