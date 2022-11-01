export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }

  padronizado(cpf) {
    return cpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }
  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return matchCpf && matchCpf[0] == cpf;
  }
  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.padronizado(cpfElement.value);
      cpfElement.classList.add("valido");
      cpfElement.classList.remove("erro");
      cpfElement.nextElementSibling.classList.remove("ativar");
    } else {
      cpfElement.classList.add("erro");
      cpfElement.classList.remove("valido");
      cpfElement.nextElementSibling.classList.add("ativar");
    }
  }
  adicionarEvento() {
    this.element.addEventListener("change", () => {
      this.validarNaMudanca(this.element);
    });
  }
  adicionarErroSpan() {
    const erroElement = document.createElement("span");
    erroElement.classList.add("erro-text");
    erroElement.innerText = "Cpf Inválido";
    this.element.parentElement.insertBefore(
      erroElement,
      this.element.nextElementSibling
    );
  }
  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
