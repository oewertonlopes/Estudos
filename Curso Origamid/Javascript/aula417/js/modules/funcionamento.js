export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);

  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  console.log(horarioAberto);
  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

/*const agora = new Date();
console.log(agora);
console.log(agora.getDate());
console.log(agora.getDay());
console.log(agora.getFullYear());
console.log(agora.getHours());
console.log(agora.getMilliseconds());
console.log(agora.getMinutes());
console.log(agora.getMonth());
console.log(agora.getTime());

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

console.log(transformarDias(agora.getTime()));

const futuro = new Date("Dec 24 2023");

console.log(futuro);
*/
