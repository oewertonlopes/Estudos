/////////////////////////////////////////////////////

for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}

////////////////////////////////////////////////////

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 3;
}

var videogames = ["Switch", "PS4", "Xbox", "3DS"];

for (let i = 0; i < videogames.length; i++) {
  console.log(videogames[i]);
  if (videogames[i] === videogames[2]) {
    break;
  }
}

videogames.pop();

videogames.push("superNes");

videogames.indexOf();

videogames.length;

///////////////////////////////////////////////////

var frutas = ["Pera", "Uva", "Maçã", "Abacaxi", "Laranja", "Melão", "Jaca"];

frutas.forEach((fruta, index) => {
  console.log(fruta, index);
});
