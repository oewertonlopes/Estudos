Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Se��o de Declara��es das vari�veis
   n: vetor[1..6] de inteiro
   i:inteiro
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   para i <- 1 ate 6 faca
      escreva("Informe o ", i , "� valor: ")
      leia (n[i])
      limpatela
   fimpara
   escreval("Os n�meros digitados foram: ")
   para i <- 1 ate 6 faca
      escreva(n[i], ",")
   fimpara
Fimalgoritmo