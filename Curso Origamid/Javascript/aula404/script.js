const comida = "pizza";
const liquido = new String("agua");
const ano = new String(2022);

console.log(comida.length);
console.log(comida[1]);

const frase = "A melhor comida.";

console.log(frase[frase.length - 1]);

console.log(frase.charAt(2));
console.log(frase.charAt(frase.length - 2));

console.log(frase);
console.log(frase.concat(" da regiao."));

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta));
console.log(fruta.includes(listaFrutas));

const nome = "Ewerton de Lira Lopes";
const letra = "L";

console.log(nome.includes(letra, 17));

console.log(fruta);
console.log(fruta.startsWith("Ba"));
console.log(fruta.startsWith("ba"));
console.log(fruta.startsWith("BaN"));
console.log(fruta.endsWith("na"));
console.log(fruta.startsWith("Na"));

console.log(frase);
console.log(frase.slice(0, -1).concat(" da região."));

const linguagem = "JavaScript";
console.log(linguagem.substring(3, 5));
console.log(linguagem.substring(4));
console.log(linguagem.substring(-5)); //não funciona

console.log(nome.indexOf("L"));
console.log(nome.indexOf("rto"));
console.log(nome.lastIndexOf("L"));

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(15, " Reais "));
  console.log(preco.padEnd(15, " teste "));
});

console.log(fruta.repeat(6));

let listaItens = "Camisas Bonés Bermudas Calças Vestidos Saias";
console.log(listaItens);
listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);

let item = "sapato";
console.log(item);
item = item.replace("a", "A");
console.log(item);

let preco = "R$ 1200,43";
console.log(preco);
preco = preco.replace(",", "."); //mudar para o padrao da programaçao
console.log(preco);

const arrayItens = listaItens.split(",");
console.log(arrayItens);

const arrayLista = listaFrutas.split(",");

console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista </div>";
console.log(htmlText);
const htmlArray = htmlText.split("div");
console.log(htmlArray);
const novoHtml = htmlArray.join("section");
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Laranja"];
console.log(frutasArray.join(" com "));

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";


console.log(sexo1 === 'feminino')
console.log(sexo1.toLowerCase() === 'feminino')
console.log(sexo2 === 'feminino')
console.log(sexo2.toUpperCase() === 'feminino')
console.log(sexo3 === 'feminino')
console.log(sexo3.toLowerCase() === 'feminino')


const valor = '                     R$ 23.00                              '
console.log(valor.trim())
console.log(valor.trimStart())
console.log(valor.trimEnd())