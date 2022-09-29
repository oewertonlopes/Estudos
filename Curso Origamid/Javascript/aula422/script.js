fetch("./dados.json")
  .then((result) => result.json())
  .then((body) => {
    //console.log(body);
  });
////////////////////////////////////////////

fetch("./dados.json")
  .then((result) => result.text())
  .then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText);
    //console.log(jsonFinal);
  });

const configuracoes = {
  player: "google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

//localStorage.player= "Google"

localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config))
//const stringConfig = JSON.stringify(configuracoes);

//console.log(stringConfig);
