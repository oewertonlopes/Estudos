Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Se��o de Declara��es das vari�veis
   nome:caractere
   soC: vetor[1..10] de caractere
   contador, total: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   total <- 0
   para contador <- 1 ate 10 faca
      escreva ("Escreva o", contador, "� nome: ")
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