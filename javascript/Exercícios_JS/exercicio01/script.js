function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let horaLocal = minutoLocal = new Date();
  let hora = `${horaLocal.getHours()} horas e ${minutoLocal.getMinutes()}`;
  msg.innerHTML = `Agora são ${hora} Minutos.`;

  if (hora >= 0 && hora < 12) {
    document.body.style.backgroundColor = ('#E8C881')
    img.src = "imagens/manha.jpg"
  } 
  else if (hora >= 12 && hora < 18) {
    img.src = 'imagens/tarde.jpg'
    document.body.style.backgroundColor = ('#53344A')
  } 
  else {
    img.src = "imagens/noite.jpg";
    document.body.style.backgroundColor = ('#074469')
  }
}
