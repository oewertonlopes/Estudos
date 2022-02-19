Algoritmo "CalculoIdade"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   ano, nasc, idade: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval(" Em  que ano estamos?")
   leia(ano)
   escreval(" Em que ano voce nasceu?")
   leia(nasc)
   idade <- ano-nasc
   escreval("Em ", ano, " você terá ", idade, " anos de idade")
   Se (idade>=18)entao
      Escreval("Você é de maior e já pode dirigir")
   Fimse

Fimalgoritmo