function saida(){
let pais = document.getElementById('texpais');
let paisUsuario = String(pais.value)
res.innerHTML = `<p>Seu País de origem é o/a ${paisUsuario}!</p>`;
if (paisUsuario =='brasil') {
    res.innerHTML += `<p>Você é Brasileiro!</p>`
  }
  else  res.innerHTML += `<p>Você é estrangeiro!</p>`
}