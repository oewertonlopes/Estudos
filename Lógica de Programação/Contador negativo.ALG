Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Se��o de Declara��es das vari�veis
   n, c: inteiro
   i: caracter

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   c <- 0
   repita
      escreva("informe um n�mero:")
      leia(n)
      se (n < 0)entao
         c <- c + 1
      fimse
      escreva ("quer continuar? [s/n]")
      leia(i)
   ate (i = "n")

   escreval ("Voc� digitou", c , " N�meros negativos.")

Fimalgoritmo