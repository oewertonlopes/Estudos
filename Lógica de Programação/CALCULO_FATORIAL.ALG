Algoritmo "calculo_fatorial"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Se��o de Declara��es das vari�veis
   n,c,f : inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Informe o n�mero que deseja realizar a fatora��o:")
   leia(n)
   c <- n
   f <- 1
   repita
      f <- f*c
      c <- c-1

   ate(c < 1)
   escreval ("Fatorial de ", n ," �: ",f)

Fimalgoritmo