/*const promessa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    setTimeout(() => {
      resolve(
        {
          nome: "Ewerton",
          idade: 33,
        },
        5000
      );
    });
  } else {
    reject("Um erro ocorreu.");
  }
});

const retorno = promessa
  .then((resolucao) => {
    console.log(resolucao);
    resolucao.profissao = "Estudante";
    return resolucao;
  })
  .then(
    (resolucao) => {
      console.log(resolucao);
    },
    (rejeitada) => {
      console.log(rejeitada);
    }
  )
  .finally((teste) => {
    console.log(teste);
  });

console.log(retorno);*/

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário logado");
  }, 1000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados carregados");
  }, 1500);
});

const carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
