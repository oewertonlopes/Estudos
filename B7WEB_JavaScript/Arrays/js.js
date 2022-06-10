let lista = [
  "ovo",
  "manteiga",
  "trigo",
  "açucar",
  "leite",
  "fermento",
  "baunilha",
];

let lista2 = [
  "pratinho",
  "garfinho",
  "guarana",
  "coca-cola",
  "docinho",
  "salgadinho",
  "copos",
];

//let res = lista.toString(); //transforma um array em string
//let res = lista.join('--'); //adiciona entre os itens o caractere entre aspas.
//let res = lista.indexOf('fermento') //posição do item no array

//lista.pop()  //retira o ultimo item da lista.
//lista.shift(); //retira o primeiro item da lista.
//lista.push('coco', 'teste'); // adiciona no fim da lista itens.
//lista[4]= 'farofa'; //altera a lista trocando o item selecionado.

//lista.splice(1,1)  //remover a partir do item 1, apenas 1 item, ou seja, manteiga.

//lista.sort(); // ordena por ordem alfabética crescente.
//lista.reverse() // ordena por ordem alfabética decrescente.

//let res = lista;
//let res2 = lista2;

//let juncao = lista.concat(lista2); //junta 2 arrays.

//console.log(res);
//console.log(res2);
//console.log(juncao);

let numeros = [45, 4, 9, 16, 25];
let numeros2 = [];

/*numeros2 = numeros.map( //varre os itens e multiplica por algum valor
  function (i) {
  return i * 2;
});

for (let i in numeros) {
  numeros2.push(numeros[i] * 2);
}


numeros2 = numeros.filter(function (item) { //filtra por parametros.
  if (item > 20) {
    return true;
  } else {
    false;
  }

   return(item > 20)?true : false
});

*/

//numeros2 = numeros.some(function (i) { //a função 'every' so é atendida se todos os numeros forem maiores que 20.
//a funçao 'some' é atendida se algum item for maior que 20.
// if (i > 20) {
//   return true;
// } else {
//   return false;
//  }

//  return(i > 20)?true : false
//});
/*
numeros2 = numeros.findIndex(function (item) {
  return (item == 16) ? true : false;
});

//find localiza um item no array
//findIndex informa a posiçao no array do item.

let resultado = numeros;

console.log(resultado);
console.log(numeros2);
*/

let teste = [
  { id: 1, nome: "Ewerton", sobrenome: "Lopes" },
  { id: 2, nome: "Amanda", sobrenome: "Tobias" },
  { id: 3, nome: "Pedro", sobrenome: "Lopes" },
];

let pessoa = teste.findIndex(function (item) {
  return item.sobrenome == "Lopes" ? true : false;
});

let res = teste;

console.log(pessoa);

let convidados = ["joana", "maria", "paulo", "ana"];
let podeEntrar = convidados.find(function (nome) {
  if (nome == "wesley") {
    return "bem vindo";
  } else {
    return "nao pode entrar";
  }
});

console.log(podeEntrar);
