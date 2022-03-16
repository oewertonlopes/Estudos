Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Seção de Declarações das variáveis
   vet: vetor[1..10] de inteiro
   contador, j, aux : inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
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