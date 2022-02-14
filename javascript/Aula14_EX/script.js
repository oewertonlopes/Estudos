function contar() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let resultado = document.getElementById("res");
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    resultado.innerHTML = 'Impossível contar!'
  } else {
    resultado.innerHTML = "Contando...<br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert ('Passo inválido! Vou considerar o passo como 1')
      p=1
    }
    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c = c + p) {
        resultado.innerHTML += ` ${c} \u{1f449}`;
      }
    } else {
      //contagem regressiva
      for (c = i; c >= f; c -= p) {
      resultado.innerHTML += `${c} \u{1f449}`;
      }
    }
    resultado.innerHTML += `\u{1f3c1}`;
  }
}
