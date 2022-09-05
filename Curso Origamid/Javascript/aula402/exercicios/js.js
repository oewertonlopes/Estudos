// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const ewerton = new pessoa("Ewerton", "Lopes", 33);
//console.log(ewerton)

// Liste os métodos acessados por dados criados com NodeList,HTMLCollection, Document

//console.log(Object.getOwnPropertyNames(NodeList.prototype))
//console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
//console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //boolean
li.offsetLeft; //number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string
