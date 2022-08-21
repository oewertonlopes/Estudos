/*const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
console.log(item, index, array);
});*/

//////////////////////////////////////////////////////////////////////////////

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

//////////////////////////////////////////////////////////////////////////////

const imgs = document.querySelectorAll("img");

imgs.forEach((item,index) => {
  console.log(item,index);
});
