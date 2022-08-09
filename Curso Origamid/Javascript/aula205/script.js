function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(2));

/////////////////////////////////////////////////
function pi() {
  return 3.14;
}
var PI = pi() * 2;

////////////////////////////////////////////////

console.log(PI);

function imc(peso, altura) {
  return peso / (altura * altura);
}
var resultado = imc(90, 1.8);
console.log(resultado);
////////////////////////////////////////////////

function corFavorita(cor) {
  if (cor === "vermelho") {
    return "Você gosta de vermelho.";
  } else if (cor === "azul") {
    return "Você gosta de Azul.";
  } else if (cor === "verde") {
    return "Você gosta de verde.";
  } else {
    return "Você não gosta de cores.";
  }
}

console.log(corFavorita("vermelho"));
////////////////////////////////////////////////

addEventListener("click", function () {
  console.log("Clicou");
});

////////////////////////////////////////////////
function clique() {
  console.log("Olá");
}

addEventListener("click", clique);

////////////////////////////////////////////////

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(20, 1.65);
////////////////////////////////////////////////

function terceiraIdade(idade) {
  if (typeof idade == "number") {
    if (idade >= 60) {
      return "Você é idoso.";
    } else {
      return "Você não é idoso.";
    }
  } else {
    return false;
  }
}

console.log(terceiraIdade(5));

////////////////////////////////////////////////

function terceiraIdade2(idade2) {
  if (typeof idade2 !== "number") {
    return "Informe sua idade Corretamente!";
  } else if (idade2 >= 60) {
    return "Você é idoso";
  } else {
    return false;
  }
}

console.log(terceiraIdade2("teste"));

////////////////////////////////////////////////

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países.`;
}

console.log(faltaVisitar(1));
////////////////////////////////////////////////

var profissao = "policial";
function dados() {
  var nome = "Ewerton";
  var sobrenome = "Lopes";
  var idade = 33;
  function outrosDados() {
    var endereco = "Rua, casa, bairro.";
    var idade = 34;
    return `${nome} ${sobrenome}, ${idade} anos, ${profissao}, ${endereco}`;
  }
  return outrosDados();
}

console.log(dados())
console.log(outrosDados())