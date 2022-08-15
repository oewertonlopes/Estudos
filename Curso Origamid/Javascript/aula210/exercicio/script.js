{
  var cor = "preto";
  const marca = "fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

//////////////////////////////////////////////////////////////////////////

const dois = 2;
function somarDois(x) {
  return x + dois;
}

function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

/////////////////////////////////////////////////////

// O que fazer para total retornar 500?

// R: mudar o var por let, desta forma o 'numero' do for ficará apenas no controle.
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
