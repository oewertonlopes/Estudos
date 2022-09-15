// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.querySelector("body");

setInterval(() => {
  body.classList.toggle("active");
}, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let index = 0;
let cronometro;

function iniciarTempo() {
  cronometro = setInterval(() => {
    tempo.innerText = index++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}
function pausarTempo() {
  clearInterval(cronometro);
  iniciar.removeAttribute("disabled", "");
}
function resetarTempo() {
  tempo.innerText = 0;
  index = 0;
}
