Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Se��o de Declara��es das vari�veis
   qtd, cont:inteiro
   nota, melhorN :real
   aluno, melhorA : caractere

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("----------------------------")
   escreval("Escola aprendendo a aprender")
   escreval("----------------------------")
   escreva("Quantos alunos a turma tem? ")
   leia(qtd)
   cont <- 1

   enquanto (cont <= qtd) faca
      escreval("----------------------------")
      escreva("ALUNO", cont, ": " )
      leia(aluno)
      escreva("Nota do " ,aluno, " : ")
      leia(nota)
      cont <- cont + 1

      se (nota > melhorN) entao
         melhorA <- aluno
         MelhorN <- nota
      fimse
   fimenquanto
   escreval("")
   escreval("O melhor aproveitamento foi o de " , melhorA ," com a nota " , melhorN)

Fimalgoritmo