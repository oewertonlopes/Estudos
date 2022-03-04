Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Seção de Declarações das variáveis
   n,c, contDiv :inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("informe um numero: ")
   leia(n)
   c <- 1
   contDiv <- 1
   repita
      c <- c+1
      se (n % c = 0) entao
         contDiv <-contDiv+1
      fimse
   ate(c > n)
   escreval("")
   se (contDiv > 2) entao
      escreval( "Não é primo.")
   senao
      escreval ("É primo.")
   fimse


Fimalgoritmo