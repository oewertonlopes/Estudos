function createButton(text) {
  const numeroSecreto = "wer2342423424";
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  const obj = {
    text: text,
  };
  return Object.freeze({
    obj,
    element,
    // numeroSecreto
  });
}

const btnComprar = createButton("Comprar");
const btnVender = createButton("Vender");
btnComprar.text = "NovoTexto";

console.log(btnComprar.element());
console.log(btnVender.element());
///////////////////////////////////////////////

function pessoa(nome) {
  if (!(this instanceof pessoa)) {
    return new pessoa(nome);
  }
  this.nome = nome;
}

pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = pessoa("Ewerton");

console.log(designer);
//////////////////////////////////////////////////////////////////////////

function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return this;
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
  }

  function on(onevent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onevent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$("button");
const as = $$("a");

function handleClick(event) {
  console.log(event.target);
}

console.log(btns.elements);
console.log(btns.hide());
console.log(btns.show());
console.log(as.elements);
btns.on("click", handleClick);
console.log(btns.removeClass("blue"));
console.log(btns.addClass("blue"));
