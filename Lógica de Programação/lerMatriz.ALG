Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Seção de Declarações das variáveis
   matr: vetor[1..3, 1..2] de inteiro
   linha, coluna:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   para linha <- 1 ate 3 faca
      para coluna <- 1 ate 2 faca
         escreva ("Digite o valor da posição [", linha, " ,", coluna, " ] : ")
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