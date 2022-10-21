const frase = "JavaScript";
const regexp = /a/;
// /a/g; com o 'g' o javaScript seleciona todos os resultados encontrados.
const alt = "i";
const fraseNova = frase.replace(regexp, alt);

console.log(fraseNova);

const regexP = /Java/;

console.log("JavaScript".replace(regexP, "Type"));

const teste = /Pe/gi;
console.log("Perdeu perdido Perdendo pErdedor".replace(teste, "Ba"));
// /a/i com o 'i' ele ignora o case sensitive da string

const teste1 = /[-.]/g;
console.log("111.222-333-44".replace(teste1, ""));
// /[-.]/g com o [] ele procura entre as informaçoes dentro dos colchetes

const teste2 = /bra[zs]il/gi;

console.log("Brasil é com z: Brazil".replace(teste2, "prazer"));

// Busca por itens de a à z
const teste3 = /[a-z]/g;

console.log("JavaScript é a linguagem.".replace(teste3, "0"));
// J000S00000 é 0 000000000.

// Procura: tudo que não estiver entre a e z
const teste4 = /[^a-z]/g;

console.log("Brasil é com z: Brazil".replace(teste4, " "));
// rasil   com z   razil

// Procura: todos os caracteres menos quebra de linha
const teste5 = /./g;

console.log("JavaScript é a linguagem.".replace(teste5, "0"));
// 0000000000000000000000000

// Procura: todos os pontos
const teste6 = /\./g;
const regexpAlternativa = /[.]/g;

console.log("999.222.222.11".replace(teste6, "-"));

// 999-222-222-11

// Procura: todos os alfanuméricos
const teste7 = /\w/g;

console.log("Guarda-chuva R$ 23,00.".replace(teste7, "*"));
// ------------ -$ --,--.

// Procura: o que não for caracter alfanuméricos
const teste8 = /\W/g;

console.log("Guarda-chuva R$ 23,00.".replace(teste8, "*"));
// Guarda-chuva-R--23-00-

// Procura: todos os dígitos
const teste9 = /\d/g;

console.log("+55 (21) 2222-2222".replace(teste9, "X"));
// +XX (XX) XXXX-XXXX.

// Procura: o que não for dígito
const teste10 = /\D/g;

console.log("+55 (21) 2222-2222".replace(teste10, ""));
// 552122222222

// Procura: espaços em branco
const teste11 = /\s/g;

console.log("+55 (21) 2222-  2222  ".replace(teste11, ""));
// +55(21)2222-2222

// Procura: o que não for espaço em branco
const teste12 = /\S/g;

console.log("+55 (21) 2222-  2222  ".replace(teste12, "*"));
// XXX XXXX XXXXX  XXXX

// Procura: 4 a's seguidos
const teste13 = /aaaa/g;
const regexpAlt = /a{4}/g;

console.log("Vaaaai ali por favor.".replace(teste13, "a"));
// Vai ali por favor.

// Procura: dígitos seguidos de 2 à 3
const teste14 = /\d{2,3}/g;

console.log("222.333.222.42".replace(teste14, "X"));
// X.X.X.X

// Procura: letras seguidos com 1 caracter ou mais
const regexpLetras = /\w{1,}/g;

console.log("A melhor linguagem é JavaScript".replace(regexpLetras, "X"));
// X X X é X

// Procura: dígitos em ocorrência de um ou mais
const teste15 = /\d+/g;

console.log("222.333.222.42".replace(teste15, "X"));
// X.X.X.X

// Procura: Começa com d, seguido por uma ou mais letras.
const regexpLetras1 = /d\w+/g;

console.log("Dígitos, dados, desenhos, Dito, d".replace(regexpLetras1, "X"));
// Dígitos, X, X, Dito, d

// Procura: Começa com d, seguido por zero ou mais letras.
const teste16 = /d\w*/g;

console.log("Dígitos, dados, desenhos, Dito, d".replace(teste16, "X"));
// Dígitos, X, X, Dito, X

// Procura: Por regex com p opcional
const teste17 = /regexp?/g;

console.log(
  "Qual é o certo, regexp ou regex?".replace(teste17, "Regular Expression")
);
// Qual é o certo, Regular Expression ou Regular Expression?

// Procura: java ou php (case insensitive)
const teste18 = /java|php/gi;

console.log("PHP e Java são linguagens diferentes".replace(teste18, "X"));
// X e X são linguagens diferente

// Procura: java (case insensitive)
const teste19 = /java/gi;
console.log("Java não é JavaScript.".replace(teste19, "X"));
// X não é XScript.

// Procura: java (case insensitive)
const regexpBoundary = /\bjava\b/gi;
console.log("Java não é JavaScript.".replace(regexpBoundary, "X"));
// X não é JavaScript.

// Procura: Dígitos em sequência, que estejam isolados
const regexpDigito1 = /\b\d+\b/gi;
console.log(
  "O Restaurante25 na Rua 3, custa R$ 32,00".replace(regexpDigito1, "X")
);
// O Restaurante25 na Rua X, custa R$ X,X

const regexpDigito = /\B\d+\B/gi;
console.log("11_22 33-44 55é66 77e88".replace(regexpDigito, "X"));
// 11_22 X-X XéX 77e88

// Procura: sequência de alfanuméricos
// no início da linha.
const teste20 = /^\w+/g;

console.log(
  `andre@origamid.com 
contato@origamid.com`.replace(teste20, "X")
);
// X@origamid.com
// contato@origamid.com

// Procura: sequência de alfanuméricos
// no final da linha.
const teste21 = /\w+$/g;

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(teste21, "X")
);
// andre@origamid.com
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no final da linha.
const teste22 = /\w+$/gm;

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(teste22, "X")
);
// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
const teste23 = /^\w+/gm;

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(teste23, "X")
);
// X@origamid.com
// X@origamid.com

const teste24 = /\n/g;

console.log(`andre@origamid.com\ncontato@origamid.com`.replace(teste24, "---"));
// andre@origamid.com---contato@origamid.com

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(teste24, "X")
);
// andre@origamid.com---contato@origamid.com

// Procura: @ ou ©
const teste25 = /\u0040|\u00A9/g;

console.log("andre@origamid.com ©".replace(teste25, "---"));
// andre---origamid.com ---
