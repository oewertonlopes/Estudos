Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Se��o de Declara��es das vari�veis
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
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva("Informe um n�mero: ")
   leia(n)
    f <- fatorial(n)
   escreval(n, "! �",f)

Fimalgoritmo