Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Se��o de Declara��es das vari�veis
   r, d :real
   c, qtd :inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   
   escreva("Quantas convers�es voc� quer fazer? ")
   leia(qtd)
   
   c <- 1

   enquanto ( c <= qtd) faca
      escreva("Qual o valor em R$ que voc� quer converter em d�lar? ")
      leia(r)
      d <- r/5.0
      escreval ("O valor de reais convertido em d�lar �:", d)
      c <- c+1
      escreval("")
   fimenquanto


Fimalgoritmo