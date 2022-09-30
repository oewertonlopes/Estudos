/*class Button {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const optionsBlack = {
  backgroundColor: "Black",
  text: "Comprar",
  color: "Red",
};

const blackButton = new Button(optionsBlack);

const blackButtonStatic = Button.createButton("Clique", "red");
*/

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    console.log(this);
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, "blue", "white");
  }
}

const botaoAzul = Button.blueButton('Comprar')

//console.log(blueButton.appendTo("body"));

/*
function Button(text, background) {
  this.text = text;
  this.background = background;
}

Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style = this.background;
  return buttonElement;
};

const blueButton = new Button("comprar", "blue");

console.log(blueButton.element());

*/
