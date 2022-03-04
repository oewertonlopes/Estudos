Algoritmo "contarplaca"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/02/2022
Var
   // Seção de Declarações das variáveis
   contador, placa:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Informe a placa do veículo:")
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