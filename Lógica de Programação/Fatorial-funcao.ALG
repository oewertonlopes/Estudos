Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Seção de Declarações das variáveis
   n,f:inteiro

funcao fatorial(v :inteiro):inteiro
var
   c, r:inteiro
inicio
   r <- 1
   para c <- 1 ate v faca
      r <- r*c
   fimpara
   retorne r
fimfuncao

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Informe um número: ")
   leia(n)
    f <- fatorial(n)
   escreval(n, "! é",f)

Fimalgoritmo