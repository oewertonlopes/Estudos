function somar() {
  var tn1 = document.getElementById('txtn1');
  var tn2 = document.getElementById('txtn2');
  var res = document.getElementById('res');
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var s = n1 + n2;
  res.innerHTML = s
}

function subtrair() {
  var subn1 = document.getElementById('subn1');
  var subn2 = document.getElementById('subn2');
  var resSub = document.getElementById('resSub');
  var sub1 = Number(subn1.value);
  var sub2 = Number(subn2.value);
  var sSub = sub1 - sub2;
  resSub.innerHTML = sSub
}

function multiplicar() {
  var muln1 = document.getElementById('muln1');
  var muln2 = document.getElementById('muln2');
  var resMul = document.getElementById('resMul');
  var mul1 = Number(muln1.value);
  var mul2 = Number(muln2.value);
  var sMul = mul1 * mul2
  resMul.innerHTML = sMul
}

function dividir() {
  var divn1 = document.getElementById('divn1');
  var divn2 = document.getElementById('divn2');
  var resDiv = document.getElementById('resDiv');
  var div1 = Number(divn1.value);
  var div2 = Number(divn2.value);
  var sDiv = div1 / div2
  resDiv.innerHTML = sDiv
}