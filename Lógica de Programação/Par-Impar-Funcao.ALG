Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Se��o de Declara��es das vari�veis
   n1:inteiro
   resultado:caractere

funcao IP(x:inteiro) :caractere
var
   r:caractere
inicio

   se (x%2=0) entao
      r <- "par"
   senao
      r <- "impar"
   fimse
   retorne r

fimfuncao
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva("Digite um n�mero: ")
   leia(n1)

   resultado <- IP(n1)
   escreva("O n�mero ", n1 ," � ", resultado, ".")
Fimalgoritmo