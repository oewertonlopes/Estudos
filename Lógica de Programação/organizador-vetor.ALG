Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Se��o de Declara��es das vari�veis
   vet: vetor[1..10] de inteiro
   contador, j, aux : inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   para contador <- 1 ate 10 faca
      escreva("Digite um valor: ")
      leia(vet[contador])
   fimpara

   para contador <- 1 ate 9 faca
      para j <- contador + 1 ate 10 faca
         se (vet[contador] > vet[j]) entao
            aux <- vet[contador]
            vet[contador] <- vet[j]
            vet[j] <- aux
         fimse
      fimpara
   fimpara

   para contador <- 1 ate 10 faca
      escreva("{",vet[contador]," }, ")
   fimpara
Fimalgoritmo