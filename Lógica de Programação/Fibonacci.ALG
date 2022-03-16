Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Seção de Declarações das variáveis
   i,t1,t2:inteiro
procedimento fibonacci(var a,b:inteiro)
var c:inteiro
inicio
   c <- a+b
   escreva(c)
   a <- b
   b <- c
fimprocedimento

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   t1 <-0
   t2 <-1
   escreva(t1,t2)
   para i <- 3 ate 10 faca
      fibonacci(t1,t2)
   fimpara
Fimalgoritmo