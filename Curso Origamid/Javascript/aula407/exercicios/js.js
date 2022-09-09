// Selecione cada curso e retorne uma array com objetos contendo o título, descricao, aulas e horas de cada curso.

const cursos = document.querySelectorAll(".curso");
//console.log(cursos);
const arrayCursos = Array.from(cursos);
//console.log(arrayCursos);
const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aula = curso.querySelector(".aulas").innerHTML;
  const hora = curso.querySelector(".horas").innerHTML;
  return {
    titulo,
    descricao,
    aula,
    hora,
  };
});

console.log(objetosCurso[0]);
console.log(objetosCurso[1]);
console.log(objetosCurso[2]);

// Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiores100 = numeros.filter((numero) => {
  if (numero > 100) {
    return numero;
  }
});

console.log(maiores100);

// Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const temBaixo = instrumentos.some((instrumento) => {
  return instrumento === "Baixo";
});

console.log(temBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorCompras = compras.map((valor) => {
  return +valor.preco.replace("R$", "").replace(",", ".");
});

//console.log(valorCompras);

const somaValorCompras = valorCompras.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(somaValorCompras);
