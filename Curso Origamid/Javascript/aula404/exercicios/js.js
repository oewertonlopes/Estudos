// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let valorTotalTaxas = 0;
transacoes.forEach((item) => {
  //console.log(item);
  if (item.descricao.startsWith("Ta")) {
    let somaValor = parseInt(item.valor.slice(3));
    //console.log(somaValor);
    valorTotalTaxas += somaValor;
  }
});
console.log(valorTotalTaxas);

let somaRecebimentoTotal = 0;
transacoes.forEach((item) => {
  if (item.descricao.startsWith("Rec")) {
    let somaRecebimento = parseInt(item.valor.slice(3));
    somaRecebimentoTotal += somaRecebimento;
  }
});
console.log(somaRecebimentoTotal);

// Retorne uma array com a lista abaixo

const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const arrayHtml = html.split("span");
//console.log(arrayHtml);
const htmlNovo = arrayHtml.join("a");
console.log(htmlNovo);

// Retorne o último caracter da frase

const frase = "Melhor do ano!";
const caracterFinal = frase.slice(-1);
console.log(caracterFinal);

// Retorne o total de taxas
const transacoes1 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxas = 0;
transacoes1.forEach((i) => {
  const transacoes1EmMinusculas = i.toLowerCase();
  //console.log(transacoes1EmMinusculas);
  const transacoes1RetirarEspaco = transacoes1EmMinusculas.trim();
  //console.log(transacoes1RetirarEspaco);
  const total = transacoes1RetirarEspaco.startsWith("taxa");
  //console.log(total);
  if (total === true) {
    totalTaxas += total;
  }
});
console.log(totalTaxas);
