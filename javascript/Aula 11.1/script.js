function calcular() {
  var txtv = document.getElementById("txtvel");
  var res = document.getElementById("result");
  var teste = Number(txtv.value);
  res.innerHTML = `<p>Sua velocidade é ${teste} Km/h.</p>`;
  if (teste > 60) {
    res.innerHTML += '<p>Você foi <strong>MULTADO!</strong></p>';
  }
  res.innerHTML += '<p>Dirija sempre com cinto de Segurança!</p>';
}
