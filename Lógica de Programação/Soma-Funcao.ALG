Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Se��o de Declara��es das vari�veis
funcao soma(a,b:inteiro):inteiro
inicio

   retorne a+b

fimfuncao
n1,n2,resultado:inteiro
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva("Informe o primeiro valor: ")
   leia(n1)
   escreva("Informe o segundo valor: ")
   leia(n2)
   resultado<-soma(n1,n2)
   escreva("A soma entre ",n1, " e " ,n2, " �: ", resultado)

Fimalgoritmo