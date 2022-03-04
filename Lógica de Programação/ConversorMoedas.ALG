Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Seção de Declarações das variáveis
   r, d :real
   c, qtd :inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   
   escreva("Quantas conversões você quer fazer? ")
   leia(qtd)
   
   c <- 1

   enquanto ( c <= qtd) faca
      escreva("Qual o valor em R$ que você quer converter em dólar? ")
      leia(r)
      d <- r/5.0
      escreval ("O valor de reais convertido em dólar é:", d)
      c <- c+1
      escreval("")
   fimenquanto


Fimalgoritmo