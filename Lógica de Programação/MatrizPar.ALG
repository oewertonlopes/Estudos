Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Seção de Declarações das variáveis
   matr: vetor[1..3, 1..3] de inteiro
   linha, coluna,totPar:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   para linha <- 1 ate 3 faca
      para coluna <- 1 ate 3 faca
         escreva ("Digite o valor da posição [", linha, " ,", coluna, " ] : ")
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
   escreva("Total de números pares:")
   escreval(totPar)
Fimalgoritmo