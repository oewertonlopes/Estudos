//FOR LOOP

/*let texto = "";
for (let i = 0; i <= 10; i++) {
  texto = texto + i;
}

document.querySelector("#demo").innerHTML = texto;
*/

//FOR LOOP ARRAY

let carros = ["Ferrari", "Fusca", "Palio", "Corolla", "Gol"];

let html = "<ul>";
for (let i in carros) {
  html += "<li>" + carros[i] + "</li>";
}
html += "</ul>";

document.querySelector("#demo").innerHTML = html;
