/*let telefone = "(81) 9";

console.log(telefone.padEnd(10, "*").padEnd(11, "-").padEnd(15, "*"));
console.log(telefone.padStart(19, "Telefone fixo"));
*/

let cartao = "1234123412341234";
let lastDigits = cartao.slice(-4);
let cartaoMascarado = lastDigits.padStart(16, "*");

//console.log(lastDigits);
console.log(`Este é o seu cartão? ${cartaoMascarado}`);
