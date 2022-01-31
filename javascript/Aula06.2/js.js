var nome = prompt("Qual é o seu nome?");
var idade = prompt("E a sua idade? qual seria?");
var nota = prompt("Qual foi sua nota na prova?");
var salario = prompt("Qual é o seu salário?");
document.writeln(`Olá ${nome}, seu nome tem ${nome.length} letras! Já sua idade é: ${idade} anos! Sua nota foi ${nota.replace(".",",")}.Totalmente em maiúsculas ele fica assim: ${nome.toUpperCase()}. Já em minúsculas ele fica desta forma aqui: ${nome.toLowerCase()}. Legal né?`);
document.writeln(`Seu salário é ${salario} reais.`);