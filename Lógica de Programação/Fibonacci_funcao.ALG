Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Seção de Declarações das variáveis
   n,i,t1,t2,t3:inteiro
funcao f(var n1,n2:inteiro) :inteiro
var n3:inteiro
inicio
   n3 <- n1+n2
   n1 <- n2
   n2 <- n3
   retorne n3
fimfuncao

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("informe um numero: ")
   leia(n)
   t1 <- 0
   escreval(t1)
   t2 <- 1
   escreval(t2)
   para i <- 3 ate n faca
      t3 <- f(t1,t2)
      escreval(t3)
   fimpara


Fimalgoritmo