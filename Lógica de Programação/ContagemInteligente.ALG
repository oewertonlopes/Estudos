Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Se��o de Declara��es das vari�veis
   i,f :inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("CONTAGEM INTELIGENTE")
   escreval("--------------------")
   escreva("In�cio: ")
   leia(i)
   escreva("Fim: ")
   leia(f)
   escreval("")
   escreval("--------------------")
   escreval("CONTANDO!")
   escreval("--------------------")


   se (i < f) entao
      enquanto ( i <= f) faca
         escreva (i, "..")
         i <- i + 1
      fimenquanto
   senao
      enquanto ( i >= f) faca
         escreva (i, "..")
         i <- i - 1
      fimenquanto
   fimse

Fimalgoritmo