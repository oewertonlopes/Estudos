function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtano");
  let res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "homem";
      res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`;
      if (idade > 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "./imagens/crianca-menino.jpg");
        res.innerHTML = `Detectamos um menino com ${idade} anos.`;
      } else if (idade < 21) {
        //adolescente
        img.setAttribute("src", "./imagens/adolescente-homem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./imagens/homem-jovem.jpg");
      } else {
        //idoso
        img.setAttribute("src", "./imagens/homem-velho.jpg");
        res.innerHTML = `Detectamos um senhor com ${idade} anos.`;
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`;
      if (idade > 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "./imagens/crianca-menina.jpg");
        res.innerHTML = `Detectamos uma menina com ${idade} anos.`;
      } else if (idade < 21) {
        //adolescente
        img.setAttribute("src", "./imagens/adolescente-mulher.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "./imagens/mulher-jovem.jpg");
      } else {
        //idoso
        img.setAttribute("src", "./imagens/mulher-velha.jpg");
        res.innerHTML = `Detectamos uma senhora com ${idade} anos.`;
      }
    }
    res.style.textAlign = "center";
    res.appendChild(img);
  }
}
