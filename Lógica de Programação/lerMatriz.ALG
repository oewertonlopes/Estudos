Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Se��o de Declara��es das vari�veis
   matr: vetor[1..3, 1..2] de inteiro
   linha, coluna:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   para linha <- 1 ate 3 faca
      para coluna <- 1 ate 2 faca
         escreva ("Digite o valor da posi��o [", linha, " ,", coluna, " ] : ")
         leia(matr[linha,coluna])
      fimpara
   fimpara
   escreval("")
   para linha <- 1 ate 3 faca
      para coluna <- 1 ate 2 faca
         escreva (matr[linha,coluna]:2)
      fimpara
      escreval("")
   fimpara

Fimalgoritmo