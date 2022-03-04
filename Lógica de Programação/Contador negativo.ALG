Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Seção de Declarações das variáveis
   n, c: inteiro
   i: caracter

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   c <- 0
   repita
      escreva("informe um número:")
      leia(n)
      se (n < 0)entao
         c <- c + 1
      fimse
      escreva ("quer continuar? [s/n]")
      leia(i)
   ate (i = "n")

   escreval ("Você digitou", c , " Números negativos.")

Fimalgoritmo