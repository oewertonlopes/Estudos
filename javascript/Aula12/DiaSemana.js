let agora = new Date();
diaSem = agora.getDay();

switch (diaSem) {
  case 0:
    console.log("Hoje é Domingo");
    break;
  case 1:
    console.log("Hoje é Segunda-Feira!");
    break;
  case 2:
    console.log("Hoje é Terça-Feira!");
    break;
  case 3:
    console.log("Hoje é Quarta-Feira!");
    break;
  case 4:
    console.log("Hoje é Quinta-Feira!");
    break;
  case 5:
    console.log("Hoje é Sexta-Feira!");
    break;
  default:
    console.log("Hoje é Sábado!");
    break;
}
