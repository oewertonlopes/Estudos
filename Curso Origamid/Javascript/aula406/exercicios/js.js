// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
primeiraComida = comidas.shift();
ulmtimaComida = comidas.pop();
comidaAdicionadaFinal = comidas.push("Arroz");
comidaAdicionadaInicio = comidas.unshift("Peixe", "Batata");
console.log(primeiraComida);
console.log(ulmtimaComida);
console.log(comidas);

///////////////////////////////////////////////////////////////////////

// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

//////////////////////////////////////////////////////////////////////////////////////////

// Substitua section por ul e div com li,
// utilizando split e join

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

console.log(html.split("section").join("ul").split("div").join("li"));

/////////////////////////////////////////////////////////

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros = ["Ford", "Fiat", "VW", "Honda"];
console.log(carros);

const arrayCarrosOriginal = carros.slice();
console.log(arrayCarrosOriginal);
carros.pop();
console.log(carros);
