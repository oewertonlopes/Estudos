Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Se��o de Declara��es das vari�veis
   n, cont, s: inteiro
   resp :caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   s <- 0
   resp <- "s"
   enquanto (resp = "s") faca
      escreva ("Digite o valor ==> ")
      leia(n)
      s <- s+n
      escreva ("Voc� quer continuar? [s/n]")
      leia(resp)
   fimenquanto
   escreva ("")
   escreval ("A soma de todos os valores digitados �", s)

Fimalgoritmo