/*function alterar() {
  document.querySelector("#titulo").innerHTML = "Trocou o título!";
  document.querySelector("#campo").value = "Trocou o campo!";
}*/

/*function alterar(titulo) {
  document.querySelector("#titulo").innerHTML = titulo;
  document.querySelector("#campo").value = titulo;
}

alterar("Titulo de exemplo");


function somar(x, y) {
  return x + y;
}

var teste = somar(20, 159);*/

function trocarImagem(foto, especie) {
  document.querySelector(".imagem").src = foto;
  document.querySelector(".imagem").setAttribute("data-animal", especie);
}

function pegarAnimal(){
 let teste = document.querySelector('.imagem').getAttribute('data-animal');
 alert (`O animal é um: ${teste}`)
}



//posso usar qualquer uma das formas para adicionar dados na imagem.

//function trocarCachorro() {
//  document.querySelector(".img").setAttribute ('nome');
//}
