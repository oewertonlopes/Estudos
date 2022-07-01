function pegarTemperatura() {
  return new Promise(function (resolve, reject) {
    console.log("pegando temperatura...");
    
    setTimeout(function () {
      resolve("40º na sombra");
    }, 2000);
  });
}

//USANDO A PROMISE

let temp = pegarTemperatura();
temp.then(function (resultado) {
  console.log(`Temperatura: ${resultado}`);
});
temp.catch(function (error) {
  console.log("Eita, deu erro.");
});
