Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Se��o de Declara��es das vari�veis
   contador, comeco, final :inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva ("Informe o in�cio da contagem: ")
   leia(comeco)
   escreva ("Informe o final da contagem: ")
   leia (final)
   para contador <- comeco ate final passo 1 faca
      se (contador%2=0) entao
         escreval (contador)
      fimse
   fimpara

Fimalgoritmo