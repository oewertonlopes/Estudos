// Retorne a soma total de caracteres dos parágrafos acima utilizando reduce

let paragrafos = document.querySelectorAll("p");
paragrafos = Array.from(paragrafos);
console.log(paragrafos);

const tamanhoParagrafos = paragrafos.map((item) => {
  return item.innerText.length;
});
console.log(tamanhoParagrafos);

const somaParagrafos = tamanhoParagrafos.reduce((acc, atual) => {
  return acc + atual;
}, 0);
console.log(somaParagrafos);

// Crie uma função que retorne novos elementos html, com os seguintes parâmetros tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

console.log(criarElemento("div", "ativo", "texto"));

// Crie uma nova função utilizando a anterior como base. Essa nova função deverá sempre criar h1 com a classe titulo. Porém o parâmetro conteudo continuará dinâmico

function criarH1Ativo(conteudo) {
  const elemento = document.createElement("h1");
  elemento.classList.add("titulo");
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

console.log(criarH1Ativo("texto texto"));
