Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Se��o de Declara��es das vari�veis
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
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   t1 <-0
   t2 <-1
   escreva(t1,t2)
   para i <- 3 ate 10 faca
      fibonacci(t1,t2)
   fimpara
Fimalgoritmo