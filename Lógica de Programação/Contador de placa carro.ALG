Algoritmo "contarplaca"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/02/2022
Var
   // Se��o de Declara��es das vari�veis
   contador, placa:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Informe a placa do ve�culo:")
   leia(placa)
   contador <- placa
   enquanto (contador <= placa) e (contador >0) faca
      escreval("Contando... " ,contador)
      contador <- (contador-9)
   fimenquanto
   escreval("")
   escreval("Terminei de contar!")
Fimalgoritmo

//kyb5291