Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Se��o de Declara��es das vari�veis
   numero:inteiro
procedimento parImpar(valor:inteiro)
inicio
   escreval("O valor � ", valor)
   escreval("O valor de numero � ", numero)
   se (valor%2=0)entao
      escreval("Par")
   senao
      escreval("impar")
   fimse

fimprocedimento

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   escreva("Digite um numero: ")
   leia(numero)
   parImpar(numero)
Fimalgoritmo