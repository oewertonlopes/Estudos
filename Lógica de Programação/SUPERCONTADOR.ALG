Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Se��o de Declara��es das vari�veis
   c,n :inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   repita
      escreval("=================")
      escrevaL("|    M E N U    |")
      escreval("=================")
      escreval("| [1] De 1 a 10 |")
      escreval("| [2] De 10 a 1 |")
      escreval("| [3] Sair      |")
      escreval("=================")
      escreval("")
      escreval("")
      escreval("")
      leia(c)


      escolha (c)

      caso (1)
         repita
            escreva(n, ".. ")
            n <- (n+1)
         ate(n > 10)

      caso (2)
         n <- 10
         repita
            escreva(n, ".. ")
            n <- n-1
         ate(n < 0)

      outrocaso
         escreval("Saindo...")
      fimescolha

   ate (c = 3)


Fimalgoritmo