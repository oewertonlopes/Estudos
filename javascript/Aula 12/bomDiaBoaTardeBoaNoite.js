let horaAgora = minutoAgora = segundoAgora = new Date()
hora = [`${horaAgora.getHours()}:${minutoAgora.getMinutes()}:${segundoAgora.getSeconds()}`]
console.log(`Agora são exatamente ${hora} minutos.`)
if ( hora >= 05 && hora <= 12 ) {
  console.log (`Bom dia!`)
} 
else if (hora >= 13 && hora < 18) {
  console.log ('Boa tarde!')
}
else {
  console.log ('Boa noite!')
}