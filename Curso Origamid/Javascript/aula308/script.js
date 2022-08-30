

const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");

h1.innerHTML = "<p>Titulo de Teste</p>"

console.log(animaisLista.innerHTML);
console.log(animaisLista.innerText);

console.log(h1.innerHTML);
console.log(h1.innerText);


///////////////////////////////////////////////////////

const lista = document.querySelector(".animais-lista");

console.log(lista);
console.log(lista.parentElement);
console.log(lista.parentElement.parentElement);
console.log(lista.parentElement.parentElement.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);
console.log(lista.children);
console.log(lista.children[lista.children.length - 1]);
console.log(lista.querySelector("li:last-child"));


////////////////////////////////////////////////////////
const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
console.log(contato);
const titulo = contato.querySelector(".titulo");
console.log(titulo);
const mapa = document.querySelector(".mapa");

animais.appendChild(titulo);
contato.insertBefore(animais, mapa);
contato.removeChild(titulo)
contato.replaceChild(lista, titulo);
//////////////////////////////////////////////////////////////////



const novoh1 = document.createElement("h1");
novoh1.innerText = "H1 Criado com sucesso!";
novoh1.classList.add('novaClasse')
mapa.appendChild(novoh1)

console.log(novoh1);
///////////////////////////////////////////////////////////////////////


const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1);
