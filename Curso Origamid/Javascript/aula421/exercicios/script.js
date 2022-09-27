// Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulário onde o usuário pode digitar o cep, e o endereço completo é retornado ao clicar em buscar.

const btnCep = document.getElementById("btnCep");
const inputCep = document.getElementById("cep");
const resultadoCep = document.querySelector(".resultadoCep");
let logradouro = document.querySelector(".logradouro");
let bairro = document.querySelector(".bairro");
let complemento = document.querySelector(".complemento");
let localidade = document.querySelector(".localidade");
let uf = document.querySelector(".uf");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((r) => r.json())
    .then((body) => {
      //console.log(body);
      logradouro.innerText = body.logradouro;
      bairro.innerText = body.bairro;
      complemento.innerText = body.complemento;
      localidade.innerText = body.localidade;
      uf.innerText = body.uf;
    });
}

// Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin em reais. atualize este valor a cada 30s

const bit = document.querySelector(".bit");

function fetcBtc() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((body) => {
      bit.innerText = ("R$: " + body.BRL.buy).replace(".", ",");
    });
}

setInterval(fetcBtc, 30000);

fetcBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random  retorne uma piada randomica do chucknorris, toda vez que  clicar em próxima

const piada = document.querySelector(".piada");
const btnProx = document.querySelector(".btn");

btnProx.addEventListener("click", piadaChuck);

function piadaChuck() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((body) => {
      piada.innerText = body.value;
    });
}
