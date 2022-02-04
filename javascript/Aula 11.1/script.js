function calcular() {
  var txtv = document.getElementById("txtvel");
  var res = document.getElementById("res");
  var vel = Number(txtv.value);
  res.innerHTML = `<p>Sua velocidade é ${vel} Km/h.</p>`;
  if (vel > 60) {
    res.innerHTML += '<p>Você foi <strong>MULTADO!</strong></p>';
  }
  res.innerHTML += '<p>Dirija sempre com cinto de Segurança!</p>';
}
