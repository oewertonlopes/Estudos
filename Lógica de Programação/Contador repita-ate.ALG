Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Se��o de Declara��es das vari�veis
   c, n, t : inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   //c <- 0
   //repita
   //   escreva( c, "...")
   //   c <- c+1
   //ate (c > 10)


   escreva ("Informe n�mero para calcular a tabu�da: ")
   leia(n)

   t <- 0

   escreval ("-----------------")
   repita
      escreval( n," x " , t , " = ", c)

      t <- t+1
      c <- t*n

   ate ( t > 10)

Fimalgoritmo