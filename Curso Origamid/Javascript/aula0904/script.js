//const regexp = /\w+/gi;
//const regexp1 = new RegExp("\\d", "gi");
//const frase = "JavaScript e Java Java java Linguagem 101";
//const regexp = /Java/gi
//console.log(frase.replace(regexp, "x"));
//console.log(frase.replace(regexp1, "z"));

//let i = 1
//while(regexp.test(frase)){
//  console.log(i++, regexp.lastIndex)
//}

//const frase = "JavaScript, TypeScript, CoffeeScript, Java";
//const regexp = /\w+/g;

//let regexpResult;
//while ((regexpResult = regexp.exec(frase)) !== null) {
//  console.log(regexpResult[0]);
//}

//const frase = "JavaScript, TypeScript, CoffeeScript, Java, 222";
//const regexp = /[a-zA-Z]+/g;

//const resultados = frase.split(regexp)

//console.log(resultados)

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp = /(?<=<\/?)\w+/g;

const resultados = tags.replace(regexp, "$&--");

console.log(resultados)
