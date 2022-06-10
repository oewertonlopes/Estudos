let n = "10.6889";

//let res = n.toString() + 5;  //tostring transforma numeros em string

//let res = "R$ " + n.toFixed(2); //to fixed dentro do parenteses informa quantos decimais ficarao depois da virgula.

let res = parseFloat(n) + 5; //transforma string em numero, mantem as casas decimais.
//let res = parseInt(n) + 5 //transforma string em numero, NÃO mantem as casas decimais.
console.log(res);
