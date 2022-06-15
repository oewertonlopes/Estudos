//let d = new Date();
//let d = new Date.now();
//let novoValor = d.getFullYear(); //ano
//let novoValor = d.getMonth(); // mes
//let novoValor = d.getDate();//dia
///let novoValor = d.getMinutes();//minutos
//let novoValor = d.getDay();//dia da semana
//let novoValor = d.getHours();//horas
//let novoValor = d.getSeconds();
//let novoValor = d.getMilliseconds();
//let novoValor = d.getTime();
//let res = novoValor;
//console.log(res);

let d = new Date();

d.setDate(d.getDate() + 5)
d.setMonth(0)
d.setFullYear(1989)

let novoValor = d
console.log(novoValor);
