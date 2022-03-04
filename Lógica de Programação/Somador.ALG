Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Seção de Declarações das variáveis
   n, cont, s: inteiro
   resp :caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   s <- 0
   resp <- "s"
   enquanto (resp = "s") faca
      escreva ("Digite o valor ==> ")
      leia(n)
      s <- s+n
      escreva ("Você quer continuar? [s/n]")
      leia(resp)
   fimenquanto
   escreva ("")
   escreval ("A soma de todos os valores digitados é", s)

Fimalgoritmo