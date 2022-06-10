/*
function azul() {
  remover();
  document.querySelector("#titulo").classList.add("azul");
}

function vermelho() {
  remover();
  document.querySelector("#titulo").classList.add("vermelho");
}

function verde() {
  remover();
  document.querySelector("#titulo").classList.add("verde");
}

function remover() {
  document.querySelector("#titulo").classList.remove("vermelho");
  document.querySelector("#titulo").classList.remove("azul");
  document.querySelector("#titulo").classList.remove("verde");
}
*/

function mostrar() {
  //document.getElementById("telefone").style.display = "block";
  document.querySelector("#telefone").classList.remove("esconder_telefone");
  document.querySelector("#telefone").classList.add("mostrar_telefone");
  document.querySelector('.btn').style.display = "none";
}
