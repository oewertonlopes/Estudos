/*
function selecionar() {
  let dia = document.querySelector("#semana").opcao.value;
  let diaNome = "";

  if (dia == 1) {
    diaNome = "Segunda";
  } else if (dia == 2) {
    diaNome = "Terça";
  } else if (dia == 3) {
    diaNome = "Quarta";
  } else if (dia == 4) {
    diaNome = "Quinta";
  } else if (dia == 5) {
    diaNome = "Sexta";
  } else if (dia == 6) {
    diaNome = "Sabado";
  } else {
    diaNome = "Domingo";
  }

  document.getElementById("dia-hoje").style.display = "block";

  if (diaNome == "Domingo" || diaNome == "Sabado") {
    document.getElementById("dia-hoje").innerHTML = `Hoje é ${diaNome}.`;
  } else {
    document.getElementById("dia-hoje").innerHTML = `Hoje é ${diaNome}-feira.`;
  }
}
*/

let dia = 4;
let diaNome = "";

switch (dia) {
  case 1:
    diaNome = "Segunda";
    break;
  case 2:
    diaNome = "Terça";
    break;
  case 3:
    diaNome = "Quarta";
    break;
  case 4:
    diaNome = "Quinta";
    break;
  case 5:
    diaNome = "Sexta";
    break;
  case 6:
    diaNome = "Sabado";
    break;
  case 7:
    diaNome = "Domingo";
    break;
  default:
    diaNome = "Por favor, insira um dia válido.";
}

document.getElementById("dia-hoje").style.display = "block";

if (diaNome == "Domingo" || diaNome == "Sabado") {
  document.getElementById("dia-hoje").innerHTML = `Hoje é ${diaNome}.`;
} else {
  document.getElementById("dia-hoje").innerHTML = `Hoje é ${diaNome}-feira.`;
}
