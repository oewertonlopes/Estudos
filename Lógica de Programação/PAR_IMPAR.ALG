Algoritmo "PAR_IMPAR"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   numero: inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("-------------------")
   escreval("")
   escreval("Informe um n�mero: ")
   escreval("")
   escreval("-------------------")
   escreval("")
   leia(numero)
   se ((numero%2)=0) entao
      escreval("")
      escreval("O n�mero que voc� digitou � par!")
   senao
      escreval("")
      escreval (" O n�mero que voc� digitou � �mpar!")
   fimse

Fimalgoritmo