Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Seção de Declarações das variáveis
   n: vetor[1..6] de inteiro
   i:inteiro
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   para i <- 1 ate 6 faca
      escreva("Informe o ", i , "º valor: ")
      leia (n[i])
      limpatela
   fimpara
   escreval("Os números digitados foram: ")
   para i <- 1 ate 6 faca
      escreva(n[i], ",")
   fimpara
Fimalgoritmo