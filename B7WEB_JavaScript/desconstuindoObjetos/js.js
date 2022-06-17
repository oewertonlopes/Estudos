let pessoa = {
  nome: "Ewerton",
  sobrenome: "Lopes",
  idade: 33,
  social: {
    facebook: "oewertonlopes",
    instagram: {
      login: "ell.009",
      senha: "testeteste",
      url: "instagram.com",
    },
  },
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

function pegarNomeCompleto({ nome, sobrenome, idade }) {
  // let nome = obj.nome;
  //let sobrenome = obj.sobrenome;
  return `${nome} ${sobrenome} ${idade}`;
  //return obj.nome +' '+obj.sobrenome
}

console.log(pegarNomeCompleto(pessoa));

//console.log(pessoa.nomeCompleto())

//let idade = pessoa.idade;
//let sobrenome = pessoa.sobrenome;
//let nome = pessoa.nome;
//let insta = pessoa.social.instagram;

//let { nome = 'Pedro', sobrenome, idade=0 } = pessoa;
//console.log(nome, sobrenome, idade)
//let { facebook, instagram } = pessoa.social;
//let {  nome,  idade,  social: {    instagram: { senha },  },} = pessoa;
//console.log(nome, idade, senha);
