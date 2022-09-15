function espera(texto) {
  console.log(texto);
}

setTimeout(espera, 5000, "Depois de 5 segundos");

setTimeout(function () {
  console.log("Uma forma comum de fazer setTimeout");
}, 1000);

setTimeout(() => {
  console.log("Outra forma comum de fazer setTimeout");
}, 3000);

for (let index = 0; index <= 20; index++) {
  setTimeout(() => {
    console.log(index);
  }, 300 * index);
}

const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick() {
  setTimeout(() => {
    console.log(this);
    this.classList.toggle("active");
  }, 1000);
}


function loop(texto) {
  console.log(texto);
}

setInterval(loop, 1000, "Passou 1 segundo");

let index = 0;
const meuLoop = setInterval(() => {
  console.log(index++);
  if (index > 5) {
    clearInterval(meuLoop);
  }
}, 1000);
