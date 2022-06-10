function subir() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function decidirBotaoScroll(){
  if (scrollY === 0) {
    document.querySelector('.scrollButton').style.display = "none";
  }
  else {
    document.querySelector('.scrollButton').style.display = "block";
  }
}

//setInterval(decidirBotaoScroll, 5)

window.addEventListener('scroll',decidirBotaoScroll);