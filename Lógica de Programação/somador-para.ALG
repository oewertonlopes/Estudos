Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Se��o de Declara��es das vari�veis
   ini, final, contador, numero, soma :inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   
   soma <-0
   escreva("Informe o in�cio: ")
   leia(ini)
   escreva("informe o final: ")
   leia(final)
   para contador <- ini ate final faca
      escreval("Informe um valor: ")
      leia(numero)
      soma <- soma+numero
   fimpara
   escreval("A soma � ", soma)
Fimalgoritmo