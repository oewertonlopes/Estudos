Algoritmo "CalculoIdade"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   ano, nasc, idade: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval(" Em  que ano estamos?")
   leia(ano)
   escreval(" Em que ano voce nasceu?")
   leia(nasc)
   idade <- ano-nasc
   escreval("Em ", ano, " voc� ter� ", idade, " anos de idade")
   Se (idade>=18)entao
      Escreval("Voc� � de maior e j� pode dirigir")
   Fimse

Fimalgoritmo