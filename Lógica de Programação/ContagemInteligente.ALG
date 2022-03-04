Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Seção de Declarações das variáveis
   i,f :inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("CONTAGEM INTELIGENTE")
   escreval("--------------------")
   escreva("Início: ")
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