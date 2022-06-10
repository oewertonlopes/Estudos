/*let nome = "ewerton de lira lopes";
let resultado = "";
if (nome.indexOf("teste") > -1) {
  resultado = "achou!";
} else {
  resultado = "Erro, não achou.";
}

console.log(resultado);
*/

//let nome = "ewerton de lira lopes";

/*let resultado = nome.slice(1, 10); // pode-se usar valores negativos

let resultado = nome.substring(1, 10); */ //no substring, nao se pode usar valores negativos

//let resultado = nome.substr(8,10); //Nesta função , o primeiro parametro é para inicializar e o segundo, quanatos caracteres ele vai 'pegar'

//console.log(resultado);

/*
let nome = "ewerton de lira lopes";

let resultado = nome.replace('ewerton', 'teste'); //primeiro poe o valor, depois, coloca o novo valor.

console.log('nome', nome)
console.log('resultado', resultado);*/

let nome = "ewerton de lira lopes";
let numeros = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";

//let resultado = nome.toUpperCase(); tudo maiuscula
//let resultado = nome.toLowerCase(); tudo minuscula
//let resultado = nome.concat(' Teste de Concatenação.');
//let resultado = nome.length; //37 caracteres
//let resultado = nome.trim().length; // 21 caracteres, retira caracteres inuteis no final e no começo.

//let resultado = nome.charAt(6); //busca o cartere na posiçao informada.

//let resultado = nome[6];//busca o cartere na posiçao informada.

let resultado = nome.split(" "); //onde tem espaço, ele criou um array

let nro = numeros.split(",");

console.log(resultado);
console.log(nro);
