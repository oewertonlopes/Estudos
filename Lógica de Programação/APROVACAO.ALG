Algoritmo "Aprova��o"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   n1,n2,media:real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("------------------------")
   escreval("Escola Aprendendo a aprender")
   escreval("------------------------")
   escreva("Informe a primeira nota: ")
   leia(n1)
   escreva("Informe a segunda nota: ")
   leia(n2)
   media<-((n1+n2)/2)
   escreval("------------------------")
   escreval("M�DIA :", media:5:1)
   se (media >=7) entao
      escreval("Aluno aprovado!")
   senao
      escreval("Aluno Reprovado.")
   fimse
   escreval("------------------------")

Fimalgoritmo