/*async function puxarDados() {
  try {
    const responseDados = await fetch("./dados.json");
    const jsonDados = await responseDados.json();
    const div = document.createElement("div");
    div.innerText = jsonDados.aula;
    document.body.appendChild(div);
  } catch (erro) {
    console.log(erro);
  }
}

puxarDados();*/
///////////////////////////////////////////////////////////////////////////////

async function puxarDados() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();
  const div = document.createElement("div");
  div.classList.add('teste')
  console.log(div);
  const div2 = document.createElement("div");
  div.innerText = jsonDados.aula;
  div2.innerText = jsonClientes.nome;
  document.body.appendChild(div);
  document.body.appendChild(div2);
}

puxarDados();
