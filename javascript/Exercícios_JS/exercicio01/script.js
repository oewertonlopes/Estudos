let horaLocal = minutoLocal = segundoLocal = new Date();
let hora = `${horaLocal.getHours()}:${minutoLocal.getMinutes()}:${segundoLocal.getSeconds()}`;
console.log (`Agora são ${hora} minutos`)
if (hora >= 6 && hora <= 12) {
  console.log ('teste1')
  
} else {
  console.log ('teste2')
}
