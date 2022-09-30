export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker").then((response) =>
    response
      .json()
      .then((bitcoin) => {
        const btcPreco = document.querySelector(".btc-preco");
        btcPreco.innerText = (10 / bitcoin.BRL.sell).toFixed(6);
      })
      .catch((erro) => {
        console.error(erro);
      })
  );
}
