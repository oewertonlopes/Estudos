function verde() {
  document.getElementById("exemplo").classList.remove("vermelho");
  document.getElementById("exemplo").classList.remove("azul");
  document.getElementById("exemplo").classList.add("verde");
}

function vermelho() {
  document.getElementById("exemplo").classList.remove("verde");
  document.getElementById("exemplo").classList.remove("azul");
  document.querySelector("#exemplo").classList.add("vermelho");
}

function azul() {
  document.getElementById("exemplo").classList.remove("verde");
  document.getElementById("exemplo").classList.remove("vermelho");
  document.getElementById("exemplo").classList.add("azul");
}

function limpar() {
  document.getElementById("exemplo").classList.remove("verde");
  document.getElementById("exemplo").classList.remove("vermelho");
  document.getElementById("exemplo").classList.remove("azul");
}

function troca_cor() {
  if (document.querySelector(".teste").classList.contains("vermelho")) {
    document.querySelector(".teste").classList.remove("vermelho");
    document.querySelector(".teste").classList.add("verde");
    document.querySelector(".teste").innerHTML = "VERDE";
  } else {
    document.querySelector(".teste").classList.remove("verde");
    document.querySelector(".teste").classList.add("vermelho");
    document.querySelector(".teste").innerHTML = "VERMELHO";
  }
}

var nome = "ewerton";
var idade = 90;
var salvo = true;
var cidade;
var tipo = typeof idade;

console.log(tipo)

//teste de comentário, após o // tudo será comentários , só funciona ma mesma linha

/*Comentários para 
funcionar 
em mais de uma linha
precisam de /**/ //*/

