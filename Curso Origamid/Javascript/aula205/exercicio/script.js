function verdade(valor) {
  if (valor >= 1) {
    return true;
  } else {
    return false;
  }
}
console.log(verdade(2));

/////////////////////////////////////////////

function perimetro(lado) {
  return lado + lado + lado + lado;
}

console.log(perimetro(4));

/////////////////////////////////////////////

function nome(nome, nomeDoMeio, Sobrenome) {
  var nomeCompleto = `${nome} ${nomeDoMeio} ${Sobrenome}`;
  return `Meu nome completo é: ${nomeCompleto}.`;
}

console.log(nome("Ewerton", "de Lira", "Lopes"));

/////////////////////////////////////////////

function parImpar(nro) {
  if (typeof nro !== "number" || nro < 0) {
    return "Informe um número válido";
  } else if (nro % 2 == 0) {
    return "Este número é par.";
  } else {
    return "Este número é impar.";
  }
}

console.log(parImpar(101));

/////////////////////////////////////////////

function tipoDados(dadoInformado) {
  return typeof dadoInformado;
}

console.log(tipoDados(3));
/////////////////////////////////////////////

function nomeTela() {
  console.log("Ewerton de Lira Lopes.");
}

addEventListener("scroll", nomeTela);

/////////////////////////////////////////////

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar.`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
