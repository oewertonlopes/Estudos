/*var nome = "Ewerton";

console.log(nome.length);
console.log(nome.charAt(1));
console.log(nome.replace("E", "e"));
console.log(nome.charCodeAt(0));
console.log(nome.concat(" Lopes"));
console.log(nome.lastIndexOf());
console.log(nome.toLocaleUpperCase());
console.log(nome.endsWith());
console.log(nome.repeat());
console.log(nome.valueOf());

///////////////////////////////////////////////////

var numero = 1.3456677;

console.log(numero.toString());
console.log(numero.toExponential());
console.log(numero.toPrecision());
console.log(numero.valueOf());
console.log(numero.toLocaleString());
console.log(numero.toFixed());



///////////////////////////////////////////////////


console.log(addEventListener.length);

*/
////////////////////////////////////////////////////

var btn = document.querySelector(".btn");
var teste = document.querySelector(".teste");

btn.addEventListener("click", function () {
  return console.log(1);
});

teste.innerHTML = "<p>Texto adicionado por javascript</p>";

btn.classList.add("azul");
