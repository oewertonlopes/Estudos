/*const cep = fetch("https://viacep.com.br/ws/53625740/json/");
//console.log(cep);
cep
  .then((resolucao) => resolucao.json())
  .then((body) => {
    //console.log(body);
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body.logradouro;
  });

const cor = fetch("./style.css");
//console.log(cor);
cor
  .then((r) => r.text())
  .then((a) => {
    //console.log(a);
    const site = document.querySelector(".conteudo");
    const style = document.createElement("style");
    style.innerHTML = a;
    //console.log(style);
    site.appendChild(style);
  });

const siteSobre = fetch("./sobre.html");
//console.log(sobre);
const div = document.createElement("div");

siteSobre
  .then((r) => r.text())
  .then((body) => {
    div.innerHTML = body;
    //console.log(div);
    const titulo = div.querySelector("h1");
    const paragrafo = div.querySelector("p");
    console.log(titulo, paragrafo);
  });

const imagem = fetch("./pokebola.png");
const div = document.createElement("div");

imagem
  .then((r) => r.blob())
  .then((b) => {
    const blobUtr = URL.createObjectURL(b);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUtr;
  });

const teste = fetch("https://viacep.com.br/ws/53625740/json/");

teste
  .then((r) => {
    const r2 = r.clone();
    r.text();
    console.log(r);
    console.log(r2);
  })
  .then((b) => {
    console.log(b);
  });*/

const teste = fetch("https://viacep.com.br/ws/53625740/json/");

teste.then((response) => {
  console.log(response.statusText);
  response.headers.forEach(console.log);
});

