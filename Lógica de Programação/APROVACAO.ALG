Algoritmo "Aprovação"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   n1,n2,media:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("------------------------")
   escreval("Escola Aprendendo a aprender")
   escreval("------------------------")
   escreva("Informe a primeira nota: ")
   leia(n1)
   escreva("Informe a segunda nota: ")
   leia(n2)
   media<-((n1+n2)/2)
   escreval("------------------------")
   escreval("MÉDIA :", media:5:1)
   se (media >=7) entao
      escreval("Aluno aprovado!")
   senao
      escreval("Aluno Reprovado.")
   fimse
   escreval("------------------------")

Fimalgoritmo