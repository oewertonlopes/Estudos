Algoritmo "contarplaca"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/02/2022
Var
   // Se��o de Declara��es das vari�veis
   contador, comeco, salto:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Informe at� que valor quer contar:")
   leia(comeco)
   escreval("Quer chegar l� pulando de quanto em quanto?")
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