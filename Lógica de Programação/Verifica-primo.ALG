Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Se��o de Declara��es das vari�veis
   n,c, contDiv :inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
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
      escreval( "N�o � primo.")
   senao
      escreval ("� primo.")
   fimse


Fimalgoritmo