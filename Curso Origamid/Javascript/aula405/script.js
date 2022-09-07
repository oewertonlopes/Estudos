const ano = 2018;
console.log(ano);
const preco = new Number(99);
console.log(preco);

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(5));
console.log(Number.isNaN("Teste"));
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.8));
console.log("99.5");
console.log(Number.parseFloat("99.5")); //Iniciar com número
console.log(Number.parseFloat("R$: 99.5"));
console.log(Number.parseFloat("99.5 reais")); //imprime apenas os números.
console.log(Number.parseInt("99.56564545343")); //imprime apenas o valor inteiro

let valor = 45.325323232355;
valor = valor.toFixed(2); // arredonda o valor, se >= 5, arredonda pra cima. pode-se deixar vazio.
console.log(+valor); // + na frente, transforma a string em numero.

let valor2 = 2.943449;
valor2 = valor2.toString(10);
console.log(valor2);

const preco2 = 59.49;
console.log(
  preco2.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

console.log(
  preco2.toLocaleString("en-US", { style: "currency", currency: "USD" })
);

console.log(
  preco2.toLocaleString("eur", { style: "currency", currency: "EUR" })
);

console.log(Math.PI);
console.log(Math.cos(45));
console.log(Math.abs(3 - 6));
console.log(Math.ceil(4.32));
console.log(Math.floor(4.89));
console.log(Math.round(4.49));
console.log(Math.round(4.5));
console.log(Math.max(5, 6, 4, 3, 8, 98, 9));
console.log(Math.min(5, 6, 4, 3, 8, 98, 9));
console.log(Math.random());
console.log(Math.random() * 100);
console.log((Math.random() * 25).toFixed());
console.log(Math.random() * (25 - 1 + 1)) + 1;
