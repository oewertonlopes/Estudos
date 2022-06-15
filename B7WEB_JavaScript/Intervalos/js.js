/*let timer;

function showTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let txt = `${h}:${m}:${s}`;

  document.querySelector(".demo").innerHTML = txt;
}

function comecar() {
  timer = setInterval(showTime, 1000); //roda de tempos em tempos
}

function parar() {
  clearInterval(timer);
}*/

let timer;

function rodar() {
 timer = setTimeout(function () { // roda UMA vez ao contrario do set interval que roda de tempo em tempo.
    document.querySelector(".demo").innerHTML = "Rodou!";
  }, 3000);
}

function parar() {
  clearTimeout(timer);
}
