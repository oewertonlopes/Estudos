Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Seção de Declarações das variáveis
   qtd, cont:inteiro
   nota, melhorN :real
   aluno, melhorA : caractere

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
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