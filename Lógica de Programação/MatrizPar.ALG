Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Se��o de Declara��es das vari�veis
   matr: vetor[1..3, 1..3] de inteiro
   linha, coluna,totPar:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   para linha <- 1 ate 3 faca
      para coluna <- 1 ate 3 faca
         escreva ("Digite o valor da posi��o [", linha, " ,", coluna, " ] : ")
         leia(matr[linha,coluna])
      fimpara
   fimpara
   escreval("")
   escreval("MATRIZ")
   escreval("------------------")
   totPar <- 0
   para linha <- 1 ate 3 faca
      para coluna <- 1 ate 3 faca
         se (matr[linha,coluna] % 2 = 0) entao
            escreva("{", matr[linha,coluna]:2, "}")
            totPar <- totPar + 1
         senao
            escreva (matr[linha,coluna]:3)
         fimse
      fimpara
      escreval("")
   fimpara
   escreval("")
   escreva("Total de n�meros pares:")
   escreval(totPar)
Fimalgoritmo