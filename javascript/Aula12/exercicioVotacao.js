let idade = 66
if (idade <= 15) {
  console.log(`Você tem ${idade} anos de idade e por isso não pode votar.`);
} 

else if (16 <= idade && idade < 18 || idade >= 65 ) {
  console.log(`Você pode votar porque tem ${idade} anos mas o voto é facultativo.`);
}

else {
  console.log(`Como sua idade é ${idade} anos, o voto é obrigatório!`);
}