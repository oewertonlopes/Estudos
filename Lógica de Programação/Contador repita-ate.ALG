Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Seção de Declarações das variáveis
   c, n, t : inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   //c <- 0
   //repita
   //   escreva( c, "...")
   //   c <- c+1
   //ate (c > 10)


   escreva ("Informe número para calcular a tabuáda: ")
   leia(n)

   t <- 0

   escreval ("-----------------")
   repita
      escreval( n," x " , t , " = ", c)

      t <- t+1
      c <- t*n

   ate ( t > 10)

Fimalgoritmo