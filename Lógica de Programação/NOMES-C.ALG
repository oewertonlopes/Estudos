Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Seção de Declarações das variáveis
   nome:caractere
   soC: vetor[1..10] de caractere
   contador, total: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   total <- 0
   para contador <- 1 ate 10 faca
      escreva ("Escreva o", contador, "º nome: ")
      leia(nome)
      se (copia(maiusc(nome), 1, 1) = "C") entao
         total <- total + 1
         soC[total] <- nome
      fimse
   fimpara

   limpatela
   escreval("Listagem final.")
   para contador <- 1 ate total faca
      escreval (soC[contador])
   fimpara
Fimalgoritmo