/*var carro = "Fusca";
function mostrarCarro() {
  console.log(carro);
}

mostrarCarro();
console.log(carro);

*/
/////////////////////////////////////////////////////

var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}.`;
  console.log(frase);
}

mostrarCarro();
console.log(carro);

///////////////////////////////////////////////////

if (true) {
  var carro = "Gol";
  console.log(`O carro é um ${carro}.`);
}

console.log(carro);

if (true) {
  let carro1 = "Palio";
  console.log(`O carro é um ${carro1}.`);
}

//console.log(carro1);

///////////////////////////////////////////////////

var i = 50;

/*for (var i = 0; i <= 10; i++) {
  console.log(`Número: ${i}`);
}

console.log(i*10) == 110
*/

for (let i = 0; i <= 10; i++) {
  console.log(`Número: ${i}`);
}

console.log(i * 10);
// i == 500

/////////////////////////////////////////////////////////////////////

const semana = "sexta";
//semana = "quinta";
//const semana = "quinta";

console.log(semana);

////////////////////////////////////////////////////

const data = {
  ano: 2018,
  mes: "dezembro",
};

data.ano = 2019;
//data = 'teste'
data.dia = 25;

///////////////////////////////////////////////////////////////

let ano;
ano = 2018;
ano++;
console.log(ano);

//let ano = 2020
