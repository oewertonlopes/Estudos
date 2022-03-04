Algoritmo "contarplaca"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/02/2022
Var
   // Seção de Declarações das variáveis
   contador, comeco, salto:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Informe até que valor quer contar:")
   leia(comeco)
   escreval("Quer chegar lá pulando de quanto em quanto?")
   leia(salto)
   escreval("")
   contador <- 0
   enquanto (contador <= comeco) faca
      escreval("Contando... " ,contador)
      contador <- (contador+salto)
   fimenquanto
   escreval("")
   escreval("Terminei de contar!")
Fimalgoritmo

//kyb5291